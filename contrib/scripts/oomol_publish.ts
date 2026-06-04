/**
 * Publish app-skills to the OOMOL skills hub (an npm/cnpm registry at
 * https://registry.oomol.com) using each skill's declared metadata.version.
 *
 * The hub ingests skills as npm packages with a specific on-disk shape, so this
 * orchestrator transforms every skill folder before publishing:
 *
 *     app-skills/oo-example/            (the authored skill)
 *         SKILL.md
 *         ...other files
 *
 *   becomes a staged package:
 *
 *     <stage>/oo-example/
 *         package.json                  (name/version/displayName/description/[icon]/files)
 *         package/
 *             package.oo.yaml           (name/version/displayName/description/[icon])
 *             skills/oo-example/         (a verbatim copy of the authored skill)
 *                 SKILL.md
 *                 ...other files
 *
 * It then runs `npm publish <stage>/oo-example --registry <registry>`. npm wraps a
 * package's contents under a top-level `package/` directory inside the tarball, so the
 * nested `package/` above lands at `package/package/...` in the tarball — which is why
 * `files` whitelists `package/package.oo.yaml`, `package/skills`, etc.
 *
 * Idempotency is two-layered: before publishing, each skill's metadata.version is
 * compared against the version the registry reports via
 * `GET <registry>/-/oomol/package-info/<name>/latest` — a skill that is already at (or
 * behind) the published version is skipped. As a backstop against races, a publish that
 * the registry rejects because the version already exists is also treated as a no-op.
 *
 * There is no rate limit, so registry queries and publishes run concurrently (default 10).
 *
 * Design mirrors clawhub_publish.ts: every decision is a pure, exported function and all
 * side effects (file IO, fetch, subprocesses, env, logging) are injected, so the logic is
 * unit-testable without touching the network or filesystem. Real wiring lives behind
 * `import.meta.main` at the bottom. Run with `bun oomol_publish.ts`; tests: `bun test`.
 */
import { appendFileSync, cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";
import process from "node:process";
// Reuse the semver subset already battle-tested by the ClawHub publisher rather than
// duplicating it — these are pure, side-effect-free helpers.
import { parseSemver, semverGt } from "./clawhub_publish.ts";

// ----------------------------------------------------------------------------
// SKILL.md frontmatter
// ----------------------------------------------------------------------------
export interface SkillManifest {
    /** Top-level `name:` (the skill slug). */
    name: string | null;
    /** Top-level `description:`. */
    description: string | null;
    /** `metadata.title` — the human-readable display name. */
    title: string | null;
    /** `metadata.version` — the version to publish. */
    version: string | null;
    /** `metadata.icon` — null/empty means "no icon" (omitted from the manifests). */
    icon: string | null;
}

export function emptyManifest(): SkillManifest {
    return { name: null, description: null, title: null, version: null, icon: null };
}

/**
 * Strip one pair of surrounding YAML quotes from a scalar value. Double-quoted values
 * are decoded with JSON.parse (YAML's double-quote escapes are a superset-compatible
 * subset of JSON's) so `\"`/`\n` survive correctly; single-quoted values just unwrap and
 * collapse the `''` escape. Unquoted values are returned trimmed.
 */
export function unquoteScalar(raw: string): string {
    const v = raw.trim();
    if (v.length >= 2 && v[0] === "\"" && v[v.length - 1] === "\"") {
        try {
            return String(JSON.parse(v));
        }
        catch {
            return v.slice(1, -1);
        }
    }
    if (v.length >= 2 && v[0] === "'" && v[v.length - 1] === "'") {
        return v.slice(1, -1).replace(/''/g, "'");
    }
    return v;
}

/**
 * Parse the fields we publish from a SKILL.md's YAML frontmatter. These manifests are
 * machine-generated and uniform: top-level `name`/`description`, and `title`/`version`/
 * `icon` indented one level under `metadata:`. We track whether we are inside the
 * `metadata:` block by watching for a top-level key, so a `version:` outside metadata
 * (there is none today) can never be mistaken for the manifest version.
 */
export function parseSkillManifest(text: string): SkillManifest {
    const m = emptyManifest();
    const lines = text.split(/\r?\n/);
    if (lines[0]?.trim() !== "---")
        return m;

    let inMetadata = false;
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i]!;
        if (line.trim() === "---")
            break;

        // Value is captured raw (leading whitespace and all) and trimmed by unquoteScalar;
        // keeping a single greedy group avoids the `\s*(.*)` backtracking ambiguity.
        const top = /^([a-z][\w-]*):(.*)$/i.exec(line);
        if (top) {
            const key = top[1]!;
            inMetadata = key === "metadata";
            if (key === "name")
                m.name = unquoteScalar(top[2]!) || null;
            else if (key === "description")
                m.description = unquoteScalar(top[2]!) || null;
            continue;
        }

        const indented = /^\s+([a-z][\w-]*):(.*)$/i.exec(line);
        if (indented && inMetadata) {
            const key = indented[1]!;
            const value = unquoteScalar(indented[2]!);
            if (key === "title")
                m.title = value || null;
            else if (key === "version")
                m.version = value || null;
            else if (key === "icon")
                m.icon = value || null;
        }
    }
    return m;
}

/** Read+parse a skill folder's SKILL.md. `readText` is injected for testing. */
export function readSkillManifest(folder: string, readText: (path: string) => string): SkillManifest {
    return parseSkillManifest(readText(join(folder, "SKILL.md")));
}

// ----------------------------------------------------------------------------
// generated package manifests (package.json + package.oo.yaml)
// ----------------------------------------------------------------------------
/**
 * Fixed `files` whitelist for every published package, exactly as the OOMOL hub expects.
 * npm silently ignores entries that do not exist on disk, so listing the optional
 * `.gitattributes`/`.gitignore`/thumbnail files is harmless when a skill omits them.
 */
export const FIXED_PACKAGE_FILES = [
    "package/.gitattributes",
    "package/.gitignore",
    "package/package.oo.yaml",
    "package/skills",
    "package/.oo-thumbnail.json",
    "package/.oo-thumbnail.zh-CN.json",
];

/** The resolved fields used to render both package manifests. */
export interface PackageFields {
    name: string;
    version: string;
    displayName: string;
    description: string;
    /** Omitted from output when null/empty. */
    icon: string | null;
}

/** Build the package.json object. `icon` is added only when present, placed before `files`. */
export function buildPackageJson(f: PackageFields): Record<string, unknown> {
    const pkg: Record<string, unknown> = {
        name: f.name,
        version: f.version,
        displayName: f.displayName,
        description: f.description,
    };
    if (f.icon)
        pkg.icon = f.icon;
    pkg.files = [...FIXED_PACKAGE_FILES];
    return pkg;
}

/** Render package.json as pretty JSON with a trailing newline. */
export function renderPackageJson(f: PackageFields): string {
    return `${JSON.stringify(buildPackageJson(f), null, 2)}\n`;
}

/**
 * Render package.oo.yaml. Every value is emitted as a JSON-quoted scalar — JSON strings
 * are valid YAML double-quoted scalars, so this is both correct and injection-proof for
 * arbitrary descriptions/titles. `icon` is omitted when absent.
 */
export function buildPackageOoYaml(f: PackageFields): string {
    const scalar = (s: string): string => JSON.stringify(String(s));
    const lines = [
        `name: ${scalar(f.name)}`,
        `version: ${scalar(f.version)}`,
        `displayName: ${scalar(f.displayName)}`,
        `description: ${scalar(f.description)}`,
    ];
    if (f.icon)
        lines.push(`icon: ${scalar(f.icon)}`);
    return `${lines.join("\n")}\n`;
}

/** Resolve the publishable fields for a skill from its slug + manifest (with fallbacks). */
export function resolvePackageFields(slug: string, manifest: SkillManifest): PackageFields {
    return {
        name: slug,
        version: manifest.version ?? "",
        displayName: manifest.title ?? slug,
        description: manifest.description ?? "",
        icon: manifest.icon && manifest.icon.trim() ? manifest.icon.trim() : null,
    };
}

// ----------------------------------------------------------------------------
// registry version lookup
// ----------------------------------------------------------------------------
/** Build the package-info endpoint URL for a package's latest published version. */
export function packageInfoUrl(registry: string, name: string): string {
    return `${registry.replace(/\/+$/, "")}/-/oomol/package-info/${encodeURIComponent(name)}/latest`;
}

/**
 * Pull the published version out of a package-info response. A 404 (or an `{error: ...}`
 * body, or unparseable/missing data) means "not published yet" -> null. On success the
 * version is read from `version`, falling back to `dist-tags.latest`/`latest`.
 */
export function extractPublishedVersion(status: number, body: string): string | null {
    // Only a 200 carries a real "latest version" payload. A 404 (unpublished) and every
    // other non-200 (5xx, gateway HTML, rate-limit text, …) all mean "unknown" -> treat as
    // unpublished and attempt to publish; that attempt is then guarded by the registry's
    // own duplicate-version rejection (see isAlreadyPublishedError).
    if (status !== 200)
        return null;
    let data: unknown;
    try {
        data = JSON.parse(body);
    }
    catch {
        return null;
    }
    if (!data || typeof data !== "object")
        return null;
    const obj = data as Record<string, unknown>;
    if (obj.error)
        return null;
    const distTags = obj["dist-tags"];
    const candidate
        = (typeof obj.version === "string" && obj.version)
            || (distTags && typeof distTags === "object" && typeof (distTags as Record<string, unknown>).latest === "string"
                ? (distTags as Record<string, string>).latest
                : null)
            || (typeof obj.latest === "string" ? obj.latest : null);
    return candidate || null;
}

/**
 * True when a failed `npm publish` was rejected because that version already exists.
 * Treated as an idempotent no-op (a concurrent run, or a stale package-info read, raced us).
 */
export function isAlreadyPublishedError(output: string): boolean {
    // registry.oomol.com runs cnpmcore, which rejects a duplicate version with HTTP 403
    // "[FORBIDDEN] Can't modify pre-existing version: <pkg>@<ver>" (note the apostrophe in
    // "Can't"). Other npm registries phrase the same conflict differently, so match every
    // known variant — but stay specific so a genuine publish failure is never silently
    // misread as an idempotent no-op.
    return /cannot publish over/i.test(output)
        || /previously published version/i.test(output)
        || /pre-existing version/i.test(output)
        || /can.?t modify .*\bversion\b/i.test(output)
        || /EPUBLISHCONFLICT/i.test(output)
        || /version already exists/i.test(output)
        || /forbidden.*(?:cannot|can.?t|already|over|pre-existing)/i.test(output);
}

// ----------------------------------------------------------------------------
// classification
// ----------------------------------------------------------------------------
export type Action = "publish" | "skip" | "error";

export interface Target {
    slug: string;
    folder: string;
    manifest: SkillManifest;
    /** Version currently on the registry; null when unpublished. */
    published: string | null;
    action: Action;
    /** Skip/error explanation; null for publishable targets. */
    reason: string | null;
}

/** Decide what to do with one skill given its manifest and the registry's published version. */
export function classify(slug: string, folder: string, manifest: SkillManifest, published: string | null): Target {
    const base = { slug, folder, manifest, published };
    const version = manifest.version;
    if (!version)
        return { ...base, action: "error", reason: `${slug}: SKILL.md has no metadata.version` };
    if (parseSemver(version) === null)
        return { ...base, action: "error", reason: `${slug}: metadata.version '${version}' is not valid semver` };
    if (published === null)
        return { ...base, action: "publish", reason: null };
    if (semverGt(version, published))
        return { ...base, action: "publish", reason: null };
    return {
        ...base,
        action: "skip",
        reason: `${slug}: metadata.version '${version}' is not newer than the published '${published}' — already up to date.`,
    };
}

// ----------------------------------------------------------------------------
// plan formatting
// ----------------------------------------------------------------------------
export function formatPlan(targets: readonly Target[], registry: string): string[] {
    const counts = { publish: 0, skip: 0, error: 0 };
    for (const t of targets)
        counts[t.action]++;
    const lines: string[] = [];
    lines.push(
        `Plan (${targets.length} skill(s) -> ${registry}): `
        + `${counts.publish} to publish, ${counts.skip} up-to-date, ${counts.error} error(s).`,
    );
    lines.push(`${"SKILL".padEnd(28)} ${"DISPLAY NAME".padEnd(22)} ${"REGISTRY".padEnd(10)} ${"MANIFEST".padEnd(10)} ACTION`);
    for (const t of [...targets].sort((a, b) => a.slug.localeCompare(b.slug))) {
        lines.push(
            `${t.slug.padEnd(28)} ${(t.manifest.title ?? "(slug)").padEnd(22)} `
            + `${(t.published ?? "-").padEnd(10)} ${(t.manifest.version ?? "?").padEnd(10)} ${t.action.toUpperCase()}`,
        );
    }
    return lines;
}

// ----------------------------------------------------------------------------
// concurrency
// ----------------------------------------------------------------------------
/**
 * Run `fn` over `items` with at most `limit` in flight at once, preserving input order in
 * the result. The registry has no rate limit, so version lookups and publishes both use
 * this (default limit 10). A rejected `fn` rejects the whole call — callers that must not
 * abort on one failure catch inside `fn`.
 */
export async function mapPool<T, R>(
    items: readonly T[],
    limit: number,
    fn: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
    const results = Array.from({ length: items.length }) as R[];
    let cursor = 0;
    const width = Math.max(1, Math.min(limit, items.length));
    const worker = async (): Promise<void> => {
        while (true) {
            const index = cursor++;
            if (index >= items.length)
                return;
            results[index] = await fn(items[index]!, index);
        }
    };
    await Promise.all(Array.from({ length: width }, worker));
    return results;
}

// ----------------------------------------------------------------------------
// package staging (the directory transformation)
// ----------------------------------------------------------------------------
export interface StageDeps {
    /** Create a fresh, empty staging directory for this slug and return its path. */
    makeStageDir: (slug: string) => string;
    mkdirp: (path: string) => void;
    writeText: (path: string, content: string) => void;
    /** Recursively copy the authored skill folder into the package's skills/<slug>/ dir. */
    copyDir: (src: string, dest: string) => void;
}

/**
 * Materialize one skill's publishable package on disk and return the staging dir to hand
 * to `npm publish`. Pure-ish: all IO is via injected `deps`, so tests assert the exact
 * files/contents/copies without a real filesystem.
 */
export function stagePackage(folder: string, slug: string, fields: PackageFields, deps: StageDeps): string {
    const stage = deps.makeStageDir(slug);
    deps.writeText(join(stage, "package.json"), renderPackageJson(fields));
    const pkgDir = join(stage, "package");
    deps.mkdirp(pkgDir);
    deps.writeText(join(pkgDir, "package.oo.yaml"), buildPackageOoYaml(fields));
    const skillDest = join(pkgDir, "skills", slug);
    deps.mkdirp(skillDest);
    deps.copyDir(folder, skillDest);
    return stage;
}

// ----------------------------------------------------------------------------
// npm publish
// ----------------------------------------------------------------------------
export function buildNpmPublishArgs(bin: string, registry: string, stageDir: string, dryRun: boolean): string[] {
    return [
        bin,
        "publish",
        stageDir,
        "--registry",
        registry,
        // No lifecycle scripts to run, but be defensive — the staged tree should never
        // execute anything during publish.
        "--ignore-scripts",
        ...(dryRun ? ["--dry-run"] : []),
    ];
}

// ----------------------------------------------------------------------------
// orchestrator
// ----------------------------------------------------------------------------
export interface RunConfig {
    /** dry-run | publish-single | publish-catalog */
    mode: string;
    /** Folder for publish-single, e.g. app-skills/oo-example. */
    skillPath: string;
    root: string;
    registry: string;
    concurrency: number;
}

export interface PublishOutcome {
    code: number;
    output: string;
}

export interface RunDeps {
    /** Slugs (folder basenames) under `root` that contain a SKILL.md. */
    listSkillSlugs: (root: string) => string[];
    readText: (path: string) => string;
    exists: (path: string) => boolean;
    fetchPublished: (name: string) => Promise<{ status: number; body: string }>;
    stage: StageDeps;
    publish: (stageDir: string, opts: { dryRun: boolean }) => Promise<PublishOutcome>;
    log: (line: string) => void;
    report?: (summary: RunSummary) => void;
}

export interface RunSummary {
    published: number;
    skipped: number;
    failed: number;
    total: number;
}

interface ActResult {
    published: { slug: string; version: string }[];
    alreadyPublished: { slug: string; version: string }[];
    failed: { slug: string; version: string; code: number }[];
}

/** Stage + publish (or dry-run) a set of targets concurrently, classifying each outcome. */
async function actOnTargets(targets: readonly Target[], cfg: RunConfig, deps: RunDeps, dryRun: boolean): Promise<ActResult> {
    const res: ActResult = { published: [], alreadyPublished: [], failed: [] };
    await mapPool(targets, cfg.concurrency, async (t) => {
        const { slug } = t;
        const version = t.manifest.version!;
        const fields = resolvePackageFields(slug, t.manifest);
        if (!t.manifest.title)
            deps.log(`::warning::${slug}: no metadata.title — using slug '${slug}' as displayName.`);

        let stageDir: string;
        try {
            stageDir = stagePackage(t.folder, slug, fields, deps.stage);
        }
        catch (e) {
            deps.log(`::error::${slug}: failed to stage package: ${e}`);
            res.failed.push({ slug, version, code: -1 });
            return;
        }

        deps.log(`==> ${dryRun ? "[dry-run] " : ""}${slug} (${fields.displayName}) @ ${version}`);
        try {
            const { code, output } = await deps.publish(stageDir, { dryRun });
            if (code === 0) {
                res.published.push({ slug, version });
            }
            else if (!dryRun && isAlreadyPublishedError(output)) {
                res.alreadyPublished.push({ slug, version });
                deps.log(`::notice::${slug} @ ${version} already published — skipping (idempotent).`);
            }
            else {
                res.failed.push({ slug, version, code });
                const tail = output.trim().split(/\r?\n/).slice(-4).join(" | ");
                deps.log(`::error::${slug}: npm publish exited ${code}. ${tail}`);
            }
        }
        catch (e) {
            // A publish that rejects (e.g. the npm binary cannot be spawned) must not abort
            // the whole concurrent batch via mapPool's Promise.all — record it as a failure
            // so already-completed publishes are preserved and the run still reports/exits 1.
            res.failed.push({ slug, version, code: -1 });
            deps.log(`::error::${slug}: publish failed to run: ${e}`);
        }
    });
    return res;
}

/** Pure orchestration: resolves what to publish, does it, returns the process exit code. */
export async function run(cfg: RunConfig, deps: RunDeps): Promise<number> {
    // 1. Resolve which skill slugs to consider.
    let slugs: string[];
    if (cfg.mode === "publish-single") {
        const slug = basename(cfg.skillPath);
        if (!deps.exists(join(cfg.root, slug, "SKILL.md"))) {
            deps.log(`::error::No SKILL.md found at ${join(cfg.root, slug)}/SKILL.md.`);
            return 1;
        }
        slugs = [slug];
    }
    else {
        slugs = [...deps.listSkillSlugs(cfg.root)].sort((a, b) => a.localeCompare(b));
        if (slugs.length === 0) {
            deps.log(`No skills found under ${cfg.root}/. Nothing to publish.`);
            deps.report?.({ published: 0, skipped: 0, failed: 0, total: 0 });
            return 0;
        }
    }

    // 2. Read each manifest and query its published version (concurrently).
    const targets = await mapPool(slugs, cfg.concurrency, async (slug): Promise<Target> => {
        const folder = join(cfg.root, slug);
        let manifest: SkillManifest;
        try {
            manifest = readSkillManifest(folder, deps.readText);
        }
        catch (e) {
            return { slug, folder, manifest: emptyManifest(), published: null, action: "error", reason: `${slug}: cannot read SKILL.md: ${e}` };
        }
        let published: string | null = null;
        try {
            const res = await deps.fetchPublished(slug);
            if (res.status !== 200 && res.status !== 404)
                deps.log(`::warning::${slug}: package-info returned HTTP ${res.status}; treating as unpublished.`);
            published = extractPublishedVersion(res.status, res.body);
        }
        catch (e) {
            deps.log(`::warning::${slug}: failed to query package-info (${e}); treating as unpublished.`);
        }
        return classify(slug, folder, manifest, published);
    });

    // 3. Print the plan.
    deps.log("");
    for (const line of formatPlan(targets, cfg.registry))
        deps.log(line);
    deps.log("");

    const errors = targets.filter(t => t.action === "error");
    const toPublish = targets.filter(t => t.action === "publish");
    const skipped = targets.filter(t => t.action === "skip");

    // 4. Dry-run: validate the transform/tarball without uploading. Surfaces version
    //    issues but never fails the run (it is a preview).
    if (cfg.mode === "dry-run") {
        deps.log(`Dry-run: validating ${toPublish.length} package(s) with 'npm publish --dry-run' (no upload).`);
        const acted = await actOnTargets(toPublish, cfg, deps, true);
        if (errors.length) {
            deps.log("");
            deps.log("The following issues would block a real publish:");
            for (const e of errors)
                deps.log(`  - ${e.reason}`);
        }
        if (acted.failed.length) {
            deps.log("Packages that failed to stage/pack:");
            for (const f of acted.failed)
                deps.log(`  ✗ ${f.slug} @ ${f.version}`);
        }
        deps.report?.({ published: 0, skipped: skipped.length, failed: acted.failed.length, total: targets.length });
        return 0;
    }

    // 5. Real publish: fail fast on any version problem before touching the registry.
    if (errors.length) {
        for (const e of errors)
            deps.log(`::error::${e.reason}`);
        deps.log("::error::Aborting publish — fix the issues above and re-run.");
        return 1;
    }
    if (toPublish.length === 0) {
        deps.log(`Nothing to publish — all ${skipped.length} skill(s) already up to date on the registry.`);
        deps.report?.({ published: 0, skipped: skipped.length, failed: 0, total: targets.length });
        return 0;
    }

    // 6. Publish concurrently.
    const acted = await actOnTargets(toPublish, cfg, deps, false);
    const published = [...acted.published].sort((a, b) => a.slug.localeCompare(b.slug));
    const already = [...acted.alreadyPublished].sort((a, b) => a.slug.localeCompare(b.slug));
    const failed = [...acted.failed].sort((a, b) => a.slug.localeCompare(b.slug));

    deps.log("");
    deps.log(
        `Published ${published.length}/${toPublish.length} skill(s); `
        + `${already.length} already present; ${skipped.length} up-to-date; ${failed.length} failed.`,
    );
    for (const s of published)
        deps.log(`  ✓ ${s.slug} @ ${s.version}`);
    for (const s of already)
        deps.log(`  = ${s.slug} @ ${s.version} (already published)`);
    deps.report?.({
        published: published.length,
        skipped: skipped.length + already.length,
        failed: failed.length,
        total: targets.length,
    });

    if (failed.length) {
        deps.log("Failed:");
        for (const f of failed)
            deps.log(`  ✗ ${f.slug} @ ${f.version} (exit ${f.code})`);
        return 1;
    }
    return 0;
}

// ----------------------------------------------------------------------------
// env -> config (pure; `getenv` injected)
// ----------------------------------------------------------------------------
export type Getenv = (name: string) => string | undefined;

function env(getenv: Getenv, name: string, def = ""): string {
    const v = getenv(name);
    return v === undefined ? def : v;
}

export const DEFAULT_REGISTRY = "https://registry.oomol.com";

export function readRunConfig(getenv: Getenv): RunConfig {
    const concurrency = Number.parseInt(env(getenv, "PUBLISH_CONCURRENCY", "10"), 10);
    return {
        mode: env(getenv, "MODE").trim() || "dry-run",
        skillPath: env(getenv, "SKILL_PATH").trim().replace(/\/+$/, ""),
        root: env(getenv, "SKILLS_ROOT", "app-skills").trim().replace(/\/+$/, "") || "app-skills",
        registry: env(getenv, "OOMOL_REGISTRY", DEFAULT_REGISTRY).trim().replace(/\/+$/, "") || DEFAULT_REGISTRY,
        concurrency: Number.isFinite(concurrency) && concurrency > 0 ? concurrency : 10,
    };
}

// ----------------------------------------------------------------------------
// real wiring (only runs when executed directly, not when imported by tests)
// ----------------------------------------------------------------------------
function listSkillSlugs(root: string): string[] {
    return readdirSync(root, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name)
        .filter(name => existsSync(join(root, name, "SKILL.md")));
}

async function realFetchPublished(registry: string, name: string): Promise<{ status: number; body: string }> {
    const res = await fetch(packageInfoUrl(registry, name), {
        headers: { accept: "application/json" },
        signal: AbortSignal.timeout(20000),
    });
    return { status: res.status, body: await res.text() };
}

function realPublish(args: string[], dryRun: boolean): Promise<PublishOutcome> {
    return (async (): Promise<PublishOutcome> => {
        let proc: Bun.Subprocess<"ignore", "pipe", "pipe">;
        try {
            proc = Bun.spawn(args, { stdin: "ignore", stdout: "pipe", stderr: "pipe", env: process.env });
        }
        catch (e) {
            // Bun.spawn throws synchronously when e.g. the npm binary is missing from PATH.
            // Resolve to a failed outcome instead so one bad spawn never rejects the batch.
            return { code: -1, output: String(e) };
        }
        const [out, err, code] = await Promise.all([
            new Response(proc.stdout).text(),
            new Response(proc.stderr).text(),
            proc.exited,
        ]);
        // Stream a real publish's output live; stay quiet during dry-run (it is verbose and
        // the orchestrator already logs one line per package plus any failure tail).
        if (!dryRun) {
            if (out)
                process.stdout.write(out);
            if (err)
                process.stderr.write(err);
        }
        return { code, output: `${out}\n${err}` };
    })();
}

if (import.meta.main) {
    const getenv: Getenv = n => process.env[n];
    const cfg = readRunConfig(getenv);
    const log = (line: string): void => console.log(line);
    const readText = (p: string): string => readFileSync(p, "utf8");

    const stage: StageDeps = {
        makeStageDir: slug => mkdtempSync(join(tmpdir(), `oomol-pkg-${slug}-`)),
        mkdirp: path => void mkdirSync(path, { recursive: true }),
        writeText: (path, content) => writeFileSync(path, content),
        copyDir: (src, dest) => cpSync(src, dest, { recursive: true }),
    };

    const outputPath = env(getenv, "GITHUB_OUTPUT").trim();
    const report = outputPath
        ? (s: RunSummary): void => {
                try {
                    appendFileSync(
                        outputPath,
                        `published=${s.published}\nskipped=${s.skipped}\nfailed=${s.failed}\ntotal=${s.total}\n`,
                    );
                }
                catch (e) {
                    log(`::warning::could not write step outputs to GITHUB_OUTPUT: ${e}`);
                }
            }
        : undefined;

    const npmBin = env(getenv, "NPM_BIN", "npm");
    const deps: RunDeps = {
        listSkillSlugs,
        readText,
        exists: existsSync,
        fetchPublished: name => realFetchPublished(cfg.registry, name),
        stage,
        publish: (stageDir, opts) => realPublish(buildNpmPublishArgs(npmBin, cfg.registry, stageDir, opts.dryRun), opts.dryRun),
        log,
        report,
    };

    process.exit(await run(cfg, deps));
}
