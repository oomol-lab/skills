/**
 * Publish app-skills to ClawHub using each skill's declared metadata.version.
 *
 * ClawHub's `clawhub sync` auto-derives versions from the registry (+ --bump) and
 * ignores the version written in SKILL.md. We want the opposite: the published
 * version must equal `metadata.version` from each skill's SKILL.md frontmatter.
 *
 * So this orchestrator:
 *   1. Reads the JSON produced by `clawhub sync --dry-run --json` to learn which
 *      skills are new/changed (and each one's current registry version).
 *   2. Reads metadata.version from every changed skill's SKILL.md.
 *   3. Publishes each changed skill with `clawhub publish <folder> --version <metadata.version>`,
 *      attaching a changelog generated per skill by `codex exec`.
 *
 * It refuses to publish a changed skill whose metadata.version was not bumped above
 * the registry version — that would be a silent no-op (you cannot republish an
 * existing version), so it is almost always a forgotten bump.
 *
 * Design: every decision is a pure, exported function; all side effects (file reads,
 * subprocesses, env, logging) are injected so the logic is unit-testable without
 * spawning anything. The real wiring lives behind `import.meta.main` at the bottom.
 * Run with: `bun clawhub_publish.ts`. Tests: `bun test`.
 */
import { appendFileSync, existsSync, mkdtempSync, readdirSync, readFileSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join, sep } from "node:path";
import process from "node:process";

// ----------------------------------------------------------------------------
// semver (only the subset these manifests use: x.y.z with optional prerelease)
// ----------------------------------------------------------------------------
export const SEMVER_RE = /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Z.-]+))?(?:\+[0-9A-Z.-]+)?$/i;

export interface Semver {
    major: number;
    minor: number;
    patch: number;
    pre: string | null;
}

export function parseSemver(value: string): Semver | null {
    const m = SEMVER_RE.exec(value.trim());
    if (!m)
        return null;
    return { major: +m[1]!, minor: +m[2]!, patch: +m[3]!, pre: m[4] ?? null };
}

/** True when version `a` is strictly greater than version `b`. */
export function semverGt(a: string, b: string): boolean {
    const pa = parseSemver(a);
    const pb = parseSemver(b);
    if (!pa || !pb)
        return false;
    const coreA = [pa.major, pa.minor, pa.patch];
    const coreB = [pb.major, pb.minor, pb.patch];
    for (let i = 0; i < 3; i++) {
        if (coreA[i] !== coreB[i])
            return (coreA[i] as number) > (coreB[i] as number);
    }
    if (pa.pre === null && pb.pre === null)
        return false;
    if (pa.pre === null)
        return true; // release > prerelease
    if (pb.pre === null)
        return false;
    return pa.pre > pb.pre; // simplified prerelease ordering
}

// ----------------------------------------------------------------------------
// SKILL.md manifest version
// ----------------------------------------------------------------------------
/**
 * Extract metadata.version from SKILL.md *content*. `version:` only ever appears
 * indented under `metadata:` in these manifests, so we take the first indented
 * `version:` line inside the frontmatter. Returns [version, errorReason].
 */
export function extractManifestVersion(text: string): [string | null, string | null] {
    const lines = text.split(/\r?\n/);
    if (lines.length === 0 || lines[0]!.trim() !== "---") {
        return [null, "has no YAML frontmatter"];
    }
    for (const line of lines.slice(1)) {
        if (line.trim() === "---")
            break;
        const m = /^\s+version:\s*["']?(\d[0-9A-Za-z.\-+]*)["']?\s*$/.exec(line);
        if (m)
            return [m[1]!, null];
    }
    return [null, "has no metadata.version field"];
}

/** Read+parse a skill folder's SKILL.md version. `readText` is injected for testing. */
export function readManifestVersion(
    folder: string,
    readText: (path: string) => string,
): [string | null, string | null] {
    const path = join(folder, "SKILL.md");
    let text: string;
    try {
        text = readText(path);
    }
    catch (e) {
        return [null, `cannot read ${path}: ${e}`];
    }
    const [version, reason] = extractManifestVersion(text);
    if (reason)
        return [null, `${path} ${reason}`];
    return [version, null];
}

// ----------------------------------------------------------------------------
// SKILL.md manifest title (the human-readable display name)
// ----------------------------------------------------------------------------
/**
 * Extract metadata.title from SKILL.md *content*. Like `version:`, `title:` only
 * ever appears indented under `metadata:` in these manifests, so we take the first
 * indented `title:` line inside the frontmatter and strip one pair of surrounding
 * quotes. Returns the title, or null when absent (a non-fatal: ClawHub then falls
 * back to title-casing the slug). We pass this as `clawhub publish --name` so the
 * published display name is the curated title (e.g. "Ably") rather than ClawHub's
 * slug-derived default (e.g. "Oo Ably" from the `oo-ably` folder).
 */
export function extractManifestTitle(text: string): string | null {
    const lines = text.split(/\r?\n/);
    if (lines.length === 0 || lines[0]!.trim() !== "---")
        return null;
    for (const line of lines.slice(1)) {
        if (line.trim() === "---")
            break;
        const m = /^\s+title:(.*)$/.exec(line);
        if (!m)
            continue;
        let value = m[1]!.trim();
        const quote = value[0];
        if ((quote === "\"" || quote === "'") && value.length >= 2 && value[value.length - 1] === quote)
            value = value.slice(1, -1);
        value = value.trim();
        return value || null;
    }
    return null;
}

/** Read a skill folder's SKILL.md title. Non-fatal: returns null on any read/parse miss. */
export function readManifestTitle(
    folder: string,
    readText: (path: string) => string,
): string | null {
    try {
        return extractManifestTitle(readText(join(folder, "SKILL.md")));
    }
    catch {
        return null;
    }
}

// ----------------------------------------------------------------------------
// candidate classification
// ----------------------------------------------------------------------------
export interface Candidate {
    slug?: string;
    folder: string;
    status?: string;
    latestVersion?: string | null;
}

export type Action = "publish" | "skip" | "error";

export interface Target {
    slug: string;
    folder: string;
    status: string;
    latest: string | null;
    version: string | null;
    action: Action;
    error: string | null;
    /** Curated display name from metadata.title; null falls back to ClawHub's slug-derived name. */
    displayName?: string | null;
}

/** Decide what to do with one candidate. `readVersion` (folder -> [version, err]) is injected. */
export function classify(
    c: Candidate,
    root: string,
    readVersion: (folder: string) => [string | null, string | null],
): Target {
    const folder = c.folder;
    const slug = c.slug || basename(folder);
    const status = c.status || "update";
    const latest = c.latestVersion ?? null;
    const base = { slug, folder, status, latest };

    const [version, err] = readVersion(folder);
    if (err)
        return { ...base, version: null, action: "error", error: `${slug}: ${err}` };
    if (parseSemver(version!) === null) {
        return { ...base, version, action: "error", error: `${slug}: metadata.version '${version}' is not valid semver` };
    }
    if (status === "new" || !latest)
        return { ...base, version, action: "publish", error: null };
    if (semverGt(version!, latest))
        return { ...base, version, action: "publish", error: null };
    return {
        ...base,
        version,
        action: "skip",
        error:
      `${slug}: content changed but metadata.version '${version}' is not greater than the `
      + `published version '${latest}'. Bump metadata.version in ${root}/${slug}/SKILL.md to publish.`,
    };
}

// ----------------------------------------------------------------------------
// candidate selection (handles publish-single narrowing)
// ----------------------------------------------------------------------------
export interface SelectResult {
    candidates: Candidate[];
    /** When set, the caller should stop and return this exit code. */
    done?: { code: number; message?: string; error?: string };
}

export function selectCandidates(
    data: { wouldPublish?: Candidate[] },
    mode: string,
    skillPath: string,
    root: string,
    exists: (path: string) => boolean,
): SelectResult {
    let candidates: Candidate[] = data.wouldPublish ?? [];
    if (mode === "publish-single") {
        const wantSlug = basename(skillPath);
        candidates = candidates.filter(c => basename(c.folder) === wantSlug);
        if (candidates.length === 0) {
            if (exists(join(skillPath, "SKILL.md"))) {
                return { candidates: [], done: { code: 0, message: `'${skillPath}' has no changes to publish (already in sync). Nothing to do.` } };
            }
            return { candidates: [], done: { code: 1, error: `'${skillPath}' was not found among scanned skills under ${root}/.` } };
        }
    }
    return { candidates };
}

// ----------------------------------------------------------------------------
// changelog
// ----------------------------------------------------------------------------
export function buildSourceLine(repo: string, sha: string): string {
    const shortSha = sha ? sha.slice(0, 7) : "";
    return repo ? `Source: \`${repo}@${shortSha}\`` : "";
}

export function buildFallbackChangelog(slug: string, version: string, repo: string, sha: string): string {
    const sourceLine = buildSourceLine(repo, sha);
    const base = `Automated publish of **${slug}** v${version}.`;
    return sourceLine ? `${base}\n\n${sourceLine}` : base;
}

export function changelogPrompt(slug: string, version: string): string {
    return (
        `Write concise release notes in GitHub-flavored Markdown for version ${version} of the `
        + `"${slug}" skill whose files are in the current directory. Read SKILL.md (and the actions/ `
        + `folder if present) to understand what it does. Summarize the skill's purpose and main `
        + `capabilities as 3-6 short bullet points. Output ONLY the Markdown body — no top-level `
        + `title heading, no surrounding code fences, no preamble or sign-off.`
    );
}

// ----------------------------------------------------------------------------
// changelog cache (content-addressed; shared by the pre-generate and publish steps)
// ----------------------------------------------------------------------------
/**
 * Bump this when `changelogPrompt` or the codex invocation changes, so previously
 * cached bodies are treated as stale and regenerated. It is folded into the cache key.
 */
export const CHANGELOG_PROMPT_VERSION = "1";

export interface HashInputsConfig {
    model: string;
    effort: string;
    promptVersion: string;
}

export interface HashInputsDeps {
    /** Every file under the skill folder, as paths relative to it (order-independent). */
    listFiles: (folder: string) => string[];
    readText: (path: string) => string;
    /** Hex digest of a string (e.g. sha256). */
    hash: (text: string) => string;
}

/**
 * Content-addressed cache key for one skill's changelog. Folds in every file under the
 * skill folder plus the codex model/effort/prompt version, so the key changes iff an
 * input that could change the generated changelog changes. Same inputs -> same key, so
 * the pre-generate step's output is reused at publish time and across CI re-runs.
 *
 * Side effects are injected (`listFiles`/`readText`/`hash`) so the keying logic stays
 * pure and unit-testable, and so the pre-generate and publish steps key identically.
 */
export function hashSkillInputs(folder: string, cfg: HashInputsConfig, deps: HashInputsDeps): string {
    const parts: string[] = [`prompt=${cfg.promptVersion}`, `model=${cfg.model}`, `effort=${cfg.effort}`];
    for (const rel of deps.listFiles(folder).slice().sort()) {
        let digest: string;
        try {
            digest = deps.hash(deps.readText(join(folder, rel)));
        }
        catch {
            digest = "<unreadable>";
        }
        parts.push(`${rel}\n${digest}`);
    }
    return deps.hash(parts.join("\n--\n"));
}

/** Filesystem path of the cached changelog body for a given content hash. */
export function changelogCachePath(cacheDir: string, hash: string): string {
    return join(cacheDir, `${hash}.md`);
}

export interface CodexConfig {
    enabled: boolean;
    bin: string;
    model: string;
    effort: string;
    provider: string;
    wireApi: string;
    baseUrl: string;
    apiKeyEnv: string;
    apiKeyPresent: boolean;
}

export function buildCodexArgs(cfg: CodexConfig, folder: string, slug: string, version: string, outFile: string): string[] {
    return [
        cfg.bin,
        "exec",
        "-m",
        cfg.model,
        "-C",
        folder,
        "-c",
        `model_provider="${cfg.provider}"`,
        "-c",
        `model_providers.${cfg.provider}.name="${cfg.provider}"`,
        "-c",
        `model_providers.${cfg.provider}.base_url="${cfg.baseUrl}"`,
        "-c",
        `model_providers.${cfg.provider}.env_key="${cfg.apiKeyEnv}"`,
        "-c",
        `model_providers.${cfg.provider}.wire_api="${cfg.wireApi}"`,
        "-c",
        `model_reasoning_effort="${cfg.effort}"`,
        "-s",
        "read-only",
        "--skip-git-repo-check",
        "--ephemeral",
        "--ignore-user-config",
        "-o",
        outFile,
        changelogPrompt(slug, version),
    ];
}

export interface Spawned {
    exitCode: number;
    stdout: string;
    stderr: string;
}

export interface ChangelogDeps {
    spawn: (cmd: string[]) => Spawned;
    exists: (path: string) => boolean;
    readText: (path: string) => string;
    makeOutFile: () => string;
    log: (line: string) => void;
}

/**
 * Generate a Markdown changelog for one skill via `codex exec`, then append repo@sha.
 * Best-effort: if Codex is disabled, misconfigured, missing, or fails, fall back to a
 * plain changelog so a single Codex hiccup never blocks the publish.
 */
export function generateChangelog(
    folder: string,
    slug: string,
    version: string,
    repo: string,
    sha: string,
    cfg: CodexConfig,
    deps: ChangelogDeps,
): string {
    const fallback = (): string => buildFallbackChangelog(slug, version, repo, sha);

    if (!cfg.enabled)
        return fallback();
    if (!cfg.baseUrl || !cfg.apiKeyPresent) {
        deps.log(`::warning::${slug}: CODEX_BASE_URL or $${cfg.apiKeyEnv} is not set — using fallback changelog.`);
        return fallback();
    }

    const outFile = deps.makeOutFile();
    const cmd = buildCodexArgs(cfg, folder, slug, version, outFile);

    let res: Spawned;
    try {
        res = deps.spawn(cmd);
    }
    catch (e) {
        deps.log(`::warning::${slug}: failed to run '${cfg.bin}' (${e}) — using fallback changelog.`);
        return fallback();
    }

    let body = "";
    if (deps.exists(outFile)) {
        try {
            body = deps.readText(outFile).trim();
        }
        catch {
            body = "";
        }
    }
    if (res.exitCode !== 0 || !body) {
        const tail = (res.stderr || "").trim().split(/\r?\n/).slice(-3).join(" | ");
        deps.log(`::warning::${slug}: codex changelog failed (exit ${res.exitCode}) — using fallback. ${tail}`);
        return fallback();
    }
    const sourceLine = buildSourceLine(repo, sha);
    return sourceLine ? `${body}\n\n${sourceLine}` : body;
}

// ----------------------------------------------------------------------------
// publish
// ----------------------------------------------------------------------------
export interface PublishConfig {
    bin: string;
    registry: string;
    site: string;
    owner: string;
}

/** Result of one `clawhub publish` invocation: exit code plus its combined stdout+stderr. */
export interface PublishOutcome {
    code: number;
    output: string;
}

/**
 * True when a failed publish was rejected by ClawHub's hourly new-skill quota (the message is
 * "Rate limit: max 5 new skills per hour. Please wait before publishing more."). In drip mode
 * this is expected back-pressure, not a failure — we stop and let the next scheduled run resume.
 */
export function isRateLimitError(output: string): boolean {
    return /rate limit/i.test(output) || /new skills per hour/i.test(output);
}

/**
 * Pick which publish targets to attempt this run. Sorting by slug makes the selection
 * deterministic so a capped (drip) run always advances through the catalog in the same order —
 * already-published skills drop out of the next diff, so progress is monotonic. `limit <= 0`
 * returns every target (still sorted), preserving the legacy "publish everything" behavior.
 */
export function limitPublishTargets<T extends { slug: string }>(targets: readonly T[], limit: number): T[] {
    const sorted = targets.slice().sort((a, b) => a.slug.localeCompare(b.slug));
    return limit > 0 && sorted.length > limit ? sorted.slice(0, limit) : sorted;
}

export function buildPublishArgs(
    cfg: PublishConfig,
    folder: string,
    version: string,
    changelog: string,
    displayName: string | null = null,
): string[] {
    // `clawhub publish` sets the registry display name to `--name` when given, else it
    // title-cases the folder basename ("oo-ably" -> "Oo Ably"). Pass the curated title so
    // the published display name drops the "Oo " prefix while the slug stays "oo-ably".
    const name = (displayName ?? "").trim();
    return [
        cfg.bin,
        "--registry",
        cfg.registry,
        "--site",
        cfg.site,
        "--no-input",
        "publish",
        folder,
        ...(name ? ["--name", name] : []),
        "--owner",
        cfg.owner,
        "--version",
        version,
        "--tags",
        "latest",
        "--changelog",
        changelog,
    ];
}

// ----------------------------------------------------------------------------
// plan formatting
// ----------------------------------------------------------------------------
export function formatPlan(targets: Target[], owner: string): string[] {
    const lines: string[] = [];
    lines.push(`Plan (${targets.length} candidate skill(s), owner=${owner || "<your account>"}):`);
    lines.push(
        `${"SKILL".padEnd(24)} ${"DISPLAY NAME".padEnd(22)} ${"STATUS".padEnd(8)} `
        + `${"REGISTRY".padEnd(10)} ${"MANIFEST".padEnd(10)} ACTION`,
    );
    for (const t of targets) {
        lines.push(
            `${t.slug.padEnd(24)} ${(t.displayName ?? "(auto)").padEnd(22)} ${(t.status ?? "?").padEnd(8)} `
            + `${(t.latest ?? "-").padEnd(10)} ${String(t.version ?? "?").padEnd(10)} ${t.action.toUpperCase()}`,
        );
    }
    return lines;
}

// ----------------------------------------------------------------------------
// orchestrator
// ----------------------------------------------------------------------------
export interface RunConfig {
    mode: string;
    skillPath: string;
    owner: string;
    root: string;
    syncJsonPath: string;
    repo: string;
    sha: string;
    /**
     * Max skills to publish in a single run; 0 means "no cap" (the legacy behavior — publish
     * every changed skill). When > 0 the run is in "drip" mode: it publishes at most this many
     * skills (sorted by slug for deterministic, monotonic progress across runs) and treats the
     * rest as deferred. ClawHub caps NEW-skill publishes at 5/hour, so a full-catalog backfill
     * must be spread across many scheduled runs — see drip-publish-skills-to-clawhub.yml.
     */
    publishLimit: number;
}

export interface RunDeps {
    readText: (path: string) => string;
    exists: (path: string) => boolean;
    readVersion: (folder: string) => [string | null, string | null];
    readTitle: (folder: string) => string | null;
    makeChangelog: (folder: string, slug: string, version: string) => string;
    publish: (cmd: string[]) => PublishOutcome;
    publishConfig: PublishConfig;
    log: (line: string) => void;
    /** Optional sink for a machine-readable run summary (the CLI wiring writes it to $GITHUB_OUTPUT). */
    report?: (summary: { published: number; remaining: number; rateLimited: boolean }) => void;
}

/** Pure orchestration: returns the process exit code, never calls process.exit. */
export function run(cfg: RunConfig, deps: RunDeps): number {
    const data = JSON.parse(deps.readText(cfg.syncJsonPath));

    // Surface anything ClawHub itself flagged during the diff.
    for (const e of data.failed ?? []) deps.log(`::warning::clawhub sync flagged ${e.slug}: ${e.message}`);
    for (const e of data.skipped ?? []) deps.log(`::warning::clawhub sync skipped ${e.slug} (${e.reason}): ${e.detail}`);

    const sel = selectCandidates(data, cfg.mode, cfg.skillPath, cfg.root, deps.exists);
    if (sel.done) {
        if (sel.done.error)
            deps.log(`::error::${sel.done.error}`);
        else if (sel.done.message)
            deps.log(sel.done.message);
        return sel.done.code;
    }
    if (sel.candidates.length === 0) {
        deps.log(`No new or changed skills under ${cfg.root}/. Nothing to publish.`);
        deps.report?.({ published: 0, remaining: 0, rateLimited: false });
        return 0;
    }

    const targets = sel.candidates
        .map(c => classify(c, cfg.root, deps.readVersion))
        .map(t => ({ ...t, displayName: deps.readTitle(t.folder) }));
    const errors = targets.filter(t => t.error).map(t => t.error!);

    deps.log("");
    for (const line of formatPlan(targets, cfg.owner)) deps.log(line);
    deps.log("");

    if (cfg.mode === "dry-run") {
        deps.log("Dry-run: no skills were published.");
        if (errors.length) {
            deps.log("");
            deps.log("The following issues would block a real publish:");
            for (const e of errors) deps.log(`  - ${e}`);
        }
        return 0;
    }

    // Real publish modes: fail fast on any version problem before mutating the registry.
    if (errors.length) {
        for (const e of errors) deps.log(`::error::${e}`);
        deps.log("::error::Aborting publish — fix the version issues above and re-run.");
        return 1;
    }

    const allToPublish = targets.filter(t => t.action === "publish");
    if (allToPublish.length === 0) {
        deps.log("Nothing to publish after version checks.");
        deps.report?.({ published: 0, remaining: 0, rateLimited: false });
        return 0;
    }

    // Drip mode (publishLimit > 0): publish at most `publishLimit` skills this run and defer
    // the rest. ClawHub caps NEW-skill publishes at 5/hour, so a full-catalog backfill is
    // spread across many scheduled runs (see drip-publish-skills-to-clawhub.yml). With no cap
    // (publishLimit === 0) this is exactly the legacy behavior: publish every changed skill.
    const drip = cfg.publishLimit > 0;
    const selected = limitPublishTargets(allToPublish, cfg.publishLimit);

    const published: [string, string][] = [];
    const failed: [string, string, number][] = [];
    const total = selected.length;
    let rateLimited = false;
    let idx = 0;
    for (const t of selected) {
        idx++;
        if (!t.displayName)
            deps.log(`::warning::${t.slug}: no metadata.title — ClawHub will derive the display name from the slug.`);
        deps.log(`==> [${idx}/${total}] ${t.slug} (${t.displayName ?? "auto"}) @ ${t.version} — generating changelog…`);
        const changelog = deps.makeChangelog(t.folder, t.slug, t.version!);
        const cmd = buildPublishArgs(deps.publishConfig, t.folder, t.version!, changelog, t.displayName ?? null);
        const { code, output } = deps.publish(cmd);
        if (code === 0) {
            published.push([t.slug, t.version!]);
        }
        else if (drip && isRateLimitError(output)) {
            // Hourly new-skill quota exhausted: stop now and let the next scheduled run resume.
            // Expected back-pressure, not a failure — the remaining skills are simply deferred.
            rateLimited = true;
            deps.log(`::warning::${t.slug}: ClawHub rate limit reached — deferring this and the remaining skill(s) to the next scheduled run.`);
            break;
        }
        else {
            failed.push([t.slug, t.version!, code]);
            deps.log(`::error::${t.slug}: clawhub publish exited with code ${code}`);
        }
    }

    // Skills still needing a future publish: everything publishable this run minus what we
    // actually published and minus genuine failures (those are surfaced as errors, not deferred).
    const remaining = allToPublish.length - published.length - failed.length;

    deps.log("");
    deps.log(`Published ${published.length}/${total} skill(s)${drip ? " this run" : ""}.`);
    for (const [slug, version] of published) deps.log(`  ✓ ${slug} @ ${version}`);
    deps.report?.({ published: published.length, remaining, rateLimited });

    if (failed.length) {
        deps.log("Failed:");
        for (const [slug, version, code] of failed) deps.log(`  ✗ ${slug} @ ${version} (exit ${code})`);
        return 1;
    }
    if (remaining > 0) {
        deps.log(
            `${remaining} skill(s) still pending (${rateLimited ? "rate-limited" : "deferred by the per-run cap"}); `
            + `the next scheduled run will continue.`,
        );
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

export function readRunConfig(getenv: Getenv): RunConfig {
    return {
        mode: env(getenv, "MODE").trim(),
        skillPath: env(getenv, "SKILL_PATH").trim().replace(/\/+$/, ""),
        owner: env(getenv, "CLAWHUB_OWNER").trim(),
        root: env(getenv, "SKILLS_ROOT", "app-skills").trim().replace(/\/+$/, "") || "app-skills",
        syncJsonPath: env(getenv, "SYNC_JSON"),
        repo: env(getenv, "GITHUB_REPOSITORY"),
        sha: env(getenv, "GITHUB_SHA"),
        publishLimit: Math.max(0, Number.parseInt(env(getenv, "PUBLISH_LIMIT", "0"), 10) || 0),
    };
}

export function readPublishConfig(getenv: Getenv): PublishConfig {
    return {
        bin: env(getenv, "CLAWHUB_BIN", "clawhub"),
        registry: env(getenv, "CLAWHUB_REGISTRY").trim(),
        site: env(getenv, "CLAWHUB_SITE").trim(),
        owner: env(getenv, "CLAWHUB_OWNER").trim(),
    };
}

export function readCodexConfig(getenv: Getenv): CodexConfig {
    const apiKeyEnv = env(getenv, "CODEX_API_KEY_ENV", "OPENAI_API_KEY").trim();
    return {
        enabled: env(getenv, "CODEX_CHANGELOG_ENABLED", "true").trim().toLowerCase() === "true",
        bin: env(getenv, "CODEX_BIN", "codex"),
        model: env(getenv, "CODEX_MODEL", "gpt-5.5"),
        effort: env(getenv, "CODEX_EFFORT", "high"),
        provider: env(getenv, "CODEX_PROVIDER", "oomol"),
        wireApi: env(getenv, "CODEX_WIRE_API", "responses"),
        baseUrl: env(getenv, "CODEX_BASE_URL").trim(),
        apiKeyEnv,
        apiKeyPresent: !!getenv(apiKeyEnv),
    };
}

// ----------------------------------------------------------------------------
// real wiring (only runs when executed directly, not when imported by tests)
// ----------------------------------------------------------------------------
function decode(buf: Uint8Array | null | undefined): string {
    return buf ? new TextDecoder().decode(buf) : "";
}

function realSpawnCapture(cmd: string[]): Spawned {
    const p = Bun.spawnSync(cmd, { stdin: "ignore", stdout: "pipe", stderr: "pipe" });
    return { exitCode: p.exitCode, stdout: decode(p.stdout), stderr: decode(p.stderr) };
}

function realPublish(cmd: string[]): PublishOutcome {
    // Capture (rather than inherit) so we can inspect the output for ClawHub's rate-limit
    // message, then echo it through so the live log is unchanged.
    const p = Bun.spawnSync(cmd, { stdin: "ignore", stdout: "pipe", stderr: "pipe" });
    const out = decode(p.stdout);
    const err = decode(p.stderr);
    if (out)
        process.stdout.write(out);
    if (err)
        process.stderr.write(err);
    return { code: p.exitCode, output: `${out}\n${err}` };
}

// Shared IO helpers for the content-addressed changelog cache. Exported so the
// pre-generate step (clawhub_changelog.ts) keys cache entries with the *exact* same
// file listing + hash as the publish step reads them back with — any divergence here
// would silently turn every lookup into a cache miss.
export function sha256Hex(text: string): string {
    return new Bun.CryptoHasher("sha256").update(text).digest("hex");
}

export function listSkillFiles(folder: string): string[] {
    return readdirSync(folder, { recursive: true })
        .map(p => String(p).split(sep).join("/"))
        .filter((rel) => {
            try {
                return statSync(join(folder, rel)).isFile();
            }
            catch {
                return false;
            }
        });
}

if (import.meta.main) {
    const getenv: Getenv = n => process.env[n];
    const cfg = readRunConfig(getenv);
    const codexCfg = readCodexConfig(getenv);
    const log = (line: string) => console.log(line);
    const readText = (p: string) => readFileSync(p, "utf8");

    const changelogDeps: ChangelogDeps = {
        spawn: realSpawnCapture,
        exists: existsSync,
        readText,
        makeOutFile: () => join(mkdtempSync(join(tmpdir(), "codex-changelog-")), "changelog.md"),
        log,
    };

    // When CHANGELOG_CACHE_DIR is set, the pre-generate step has already produced each
    // changelog body in parallel; read it by content hash and append the source line.
    // A cache miss (codex failed upstream, or pre-generate was skipped) falls back to a
    // plain changelog — publish never runs codex itself, so it stays fast and serial.
    const cacheDir = env(getenv, "CHANGELOG_CACHE_DIR").trim();
    const hashCfg: HashInputsConfig = { model: codexCfg.model, effort: codexCfg.effort, promptVersion: CHANGELOG_PROMPT_VERSION };
    const hashDeps: HashInputsDeps = { listFiles: listSkillFiles, readText, hash: sha256Hex };
    const changelogFromCache = (folder: string, slug: string, version: string): string => {
        const path = changelogCachePath(cacheDir, hashSkillInputs(folder, hashCfg, hashDeps));
        if (existsSync(path)) {
            let body = "";
            try {
                body = readText(path).trim();
            }
            catch {
                body = "";
            }
            if (body) {
                const sourceLine = buildSourceLine(cfg.repo, cfg.sha);
                return sourceLine ? `${body}\n\n${sourceLine}` : body;
            }
        }
        return buildFallbackChangelog(slug, version, cfg.repo, cfg.sha);
    };

    // When GitHub Actions provides $GITHUB_OUTPUT, expose a machine-readable run summary so the
    // workflow can branch on it (e.g. the drip workflow stops its schedule once `done` is true).
    const outputPath = env(getenv, "GITHUB_OUTPUT").trim();
    const report = outputPath
        ? (s: { published: number; remaining: number; rateLimited: boolean }): void => {
                try {
                    appendFileSync(
                        outputPath,
                        `published=${s.published}\nremaining=${s.remaining}\ndone=${s.remaining === 0}\nrate_limited=${s.rateLimited}\n`,
                    );
                }
                catch (e) {
                    log(`::warning::could not write step outputs to GITHUB_OUTPUT: ${e}`);
                }
            }
        : undefined;

    const deps: RunDeps = {
        readText,
        exists: existsSync,
        readVersion: folder => readManifestVersion(folder, readText),
        readTitle: folder => readManifestTitle(folder, readText),
        makeChangelog: cacheDir
            ? changelogFromCache
            : (folder, slug, version) => generateChangelog(folder, slug, version, cfg.repo, cfg.sha, codexCfg, changelogDeps),
        publish: realPublish,
        publishConfig: readPublishConfig(getenv),
        log,
        report,
    };

    process.exit(run(cfg, deps));
}
