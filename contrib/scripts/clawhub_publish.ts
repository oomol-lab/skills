/**
 * Publish app-skills to ClawHub using each skill's declared metadata.version, spread across
 * several publishing accounts to get around ClawHub's per-key rate limit.
 *
 * ClawHub's `clawhub sync` auto-derives versions from the registry (+ --bump) and ignores the
 * version written in SKILL.md. We want the opposite: the published version must equal
 * `metadata.version` from each skill's SKILL.md frontmatter.
 *
 * ClawHub also rate-limits NEW-skill publishes per API key (5/hour, 20/24h). Updating an existing
 * skill's version is NOT rate-limited. To drain a large catalog faster we publish under several
 * accounts at once (CLAWHUB_TOKENS = "NAME:KEY,NAME:KEY"): each account publishes at most
 * MAX_NEW_PER_ACCOUNT new skills this run (default 5 — one hourly quota), plus all of its assigned
 * updates. The operator re-runs the workflow (~hourly) to drain the rest; every run is idempotent.
 *
 * So this orchestrator:
 *   1. Reads the JSON produced by `clawhub sync --dry-run --json` to learn which skills are
 *      new/changed (and each one's current registry version).
 *   2. Reads metadata.version from every changed skill's SKILL.md and classifies it.
 *   3. Round-robin assigns the publishable skills to the accounts, caps NEW publishes per account,
 *      and publishes each with `clawhub publish <folder> --version <metadata.version>` under that
 *      account's token, attaching a per-skill changelog.
 *   4. Emits a per-account results table (published / updated / failed / rate-limited / remaining)
 *      to $GITHUB_STEP_SUMMARY plus machine-readable totals to $GITHUB_OUTPUT.
 *
 * SECURITY: this script never handles raw tokens. clawhub_auth.ts parses CLAWHUB_TOKENS, writes a
 * per-account clawhub config file, and hands this script a token-free manifest of
 * {name, configPath}. We select an account's token by pointing clawhub at its config path via
 * CLAWHUB_CONFIG_PATH — no key ever reaches a log line, a command line, or this script's memory.
 *
 * A changed skill whose metadata.version was not bumped above the registry version is "blocked":
 * it cannot publish (you can't republish an existing version) and is surfaced as a warning rather
 * than published — bump it and re-run.
 *
 * Design: every decision is a pure, exported function; all side effects (file reads, subprocesses,
 * env, logging) are injected so the logic is unit-testable without spawning anything. The real
 * wiring lives behind `import.meta.main` at the bottom. Run with: `bun clawhub_publish.ts`.
 * Tests: `bun test`.
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
// publishing accounts (CLAWHUB_TOKENS = "NAME:API_KEY,NAME:API_KEY")
// ----------------------------------------------------------------------------
export interface Account {
    name: string;
    /** Secret API key. NEVER log this or put it on a command line / in any CI output. */
    key: string;
}

/**
 * Parse CLAWHUB_TOKENS ("NAME:API_KEY,NAME:API_KEY") into named accounts. Publishing under several
 * accounts multiplies ClawHub's per-key new-skill quota (5/hour, 20/24h), so a big catalog drains
 * faster. The key is split on the FIRST colon only (API keys may themselves contain ':').
 *
 * SECURITY: every code path here is key-free in its outputs — a malformed entry is reported by
 * position ("#2"), never by echoing its contents, so a bad token can't leak into a log. Duplicate
 * names are disambiguated ("Kevin", "Kevin#2") so the results table stays unambiguous. Returns
 * [accounts, errors]; never throws.
 */
export function parseAccounts(raw: string): [Account[], string[]] {
    const accounts: Account[] = [];
    const errors: string[] = [];
    const used = new Map<string, number>();
    const entries = (raw ?? "").split(",").map(s => s.trim()).filter(Boolean);
    entries.forEach((entry, i) => {
        const colon = entry.indexOf(":");
        const name = colon > 0 ? entry.slice(0, colon).trim() : "";
        const key = colon > 0 ? entry.slice(colon + 1).trim() : "";
        if (!name || !key) {
            errors.push(`token entry #${i + 1} is malformed (expected NAME:API_KEY) — skipping it.`);
            return;
        }
        const seen = used.get(name) ?? 0;
        used.set(name, seen + 1);
        accounts.push({ name: seen === 0 ? name : `${name}#${seen + 1}`, key });
    });
    return [accounts, errors];
}

// ----------------------------------------------------------------------------
// distribution across accounts
// ----------------------------------------------------------------------------
/** Round-robin partition: bucket i of n gets items at indices where idx % n === i, in order. */
export function roundRobin<T>(items: readonly T[], n: number): T[][] {
    const buckets: T[][] = Array.from({ length: Math.max(0, n) }, () => []);
    if (n <= 0)
        return buckets;
    items.forEach((item, i) => buckets[i % n]!.push(item));
    return buckets;
}

function bySlug<T extends { slug: string }>(targets: readonly T[]): T[] {
    return targets.slice().sort((a, b) => a.slug.localeCompare(b.slug));
}

/** A publishing account as the publish step sees it: a name and a path to its clawhub config. */
export interface AccountRef {
    name: string;
    /** Path to this account's clawhub config file (registry + token), written by clawhub_auth.ts. */
    configPath: string;
}

export interface AccountPlan {
    account: AccountRef;
    /** New-skill publishes to attempt this run (already capped at maxNewPerAccount). */
    newTargets: Target[];
    /** Version updates to attempt this run (uncapped — ClawHub only rate-limits NEW skills). */
    updateTargets: Target[];
    /** New skills assigned to this account but beyond its per-run cap; deferred to a later run. */
    deferredNew: Target[];
}

/**
 * Spread the publishable targets across the accounts for one run.
 *
 * NEW skills are the rate-limited resource (ClawHub caps them at 5/hour, 20/24h per key), so they
 * are round-robin assigned and then capped at `maxNewPerAccount` per account — the union published
 * this run is the lowest `maxNewPerAccount * accounts.length` slugs, so progress marches
 * deterministically through the catalog and re-runs are monotonic (published skills drop out of the
 * next diff). UPDATES are not rate-limited, so every assigned update is attempted this run.
 * `maxNewPerAccount <= 0` means "no cap" (attempt every assigned new skill).
 */
export function planDistribution(
    newTargets: readonly Target[],
    updateTargets: readonly Target[],
    accounts: readonly AccountRef[],
    maxNewPerAccount: number,
): AccountPlan[] {
    const newShares = roundRobin(bySlug(newTargets), accounts.length);
    const updateShares = roundRobin(bySlug(updateTargets), accounts.length);
    const cap = maxNewPerAccount > 0 ? maxNewPerAccount : Number.POSITIVE_INFINITY;
    return accounts.map((account, i) => {
        const share = newShares[i] ?? [];
        return {
            account,
            newTargets: share.slice(0, cap),
            deferredNew: cap === Number.POSITIVE_INFINITY ? [] : share.slice(cap),
            updateTargets: updateShares[i] ?? [],
        };
    });
}

// ----------------------------------------------------------------------------
// per-account stats + totals + results table
// ----------------------------------------------------------------------------
export interface AccountStats {
    name: string;
    /** NEW skills successfully published this run. */
    published: number;
    /** Existing skills successfully updated (new version) this run. */
    updated: number;
    /** Skills attempted but rejected for a non-rate-limit reason. */
    failed: number;
    /** True when ClawHub's quota stopped this account mid-run (the rest is deferred). */
    rateLimited: boolean;
    /** Skills assigned to this account but not published this run (over-cap, failed, or deferred). */
    remaining: number;
}

export interface Totals {
    published: number;
    updated: number;
    failed: number;
    remaining: number;
    rateLimitedAccounts: string[];
}

export function totalsOf(stats: readonly AccountStats[]): Totals {
    return {
        published: stats.reduce((n, s) => n + s.published, 0),
        updated: stats.reduce((n, s) => n + s.updated, 0),
        failed: stats.reduce((n, s) => n + s.failed, 0),
        remaining: stats.reduce((n, s) => n + s.remaining, 0),
        rateLimitedAccounts: stats.filter(s => s.rateLimited).map(s => s.name),
    };
}

/** A skill that can't publish as-is (version not bumped, invalid semver, unreadable manifest). */
export interface Blocked {
    slug: string;
    reason: string;
}

/**
 * Render the run's results as GitHub-flavored Markdown for $GITHUB_STEP_SUMMARY: a per-account
 * table (published / updated / failed / rate-limited / remaining), a totals row, and a "blocked"
 * section for skills needing a manual version bump. Uses account NAMES only — never keys.
 */
export function formatSummaryMarkdown(stats: readonly AccountStats[], blocked: readonly Blocked[]): string[] {
    const t = totalsOf(stats);
    const lines: string[] = [];
    lines.push("### ClawHub publish results");
    lines.push("");
    lines.push("| Account | Published (new) | Updated | Failed | Rate-limited | Remaining |");
    lines.push("| --- | ---: | ---: | ---: | :---: | ---: |");
    for (const s of stats) {
        lines.push(`| ${s.name} | ${s.published} | ${s.updated} | ${s.failed} | ${s.rateLimited ? "⚠️ yes" : "—"} | ${s.remaining} |`);
    }
    lines.push(`| **Total** | **${t.published}** | **${t.updated}** | **${t.failed}** | ${t.rateLimitedAccounts.length ? `**${t.rateLimitedAccounts.length}**` : "—"} | **${t.remaining}** |`);
    lines.push("");
    if (t.rateLimitedAccounts.length)
        lines.push(`> Rate-limited this run: ${t.rateLimitedAccounts.join(", ")} — their remaining skills roll over to the next run.`);
    if (t.remaining > 0)
        lines.push(`> ${t.remaining} skill(s) still pending — re-run this workflow (e.g. in ~1h) to continue. It is idempotent.`);
    if (blocked.length) {
        lines.push("");
        lines.push(`#### Blocked (${blocked.length}) — bump metadata.version before they can publish`);
        for (const b of blocked) lines.push(`- \`${b.slug}\`: ${b.reason}`);
    }
    return lines;
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
 * True when a failed publish was rejected by ClawHub's new-skill quota (the message is
 * "Rate limit: max 5 new skills per hour. Please wait before publishing more." — the 24h/20 cap
 * surfaces the same way). This is expected back-pressure, not a failure: we stop that account and
 * let a later run resume.
 */
export function isRateLimitError(output: string): boolean {
    return /rate limit/i.test(output) || /new skills per hour/i.test(output);
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
     * Per-account cap on NEW-skill publishes per run — the rate-limited resource (ClawHub caps new
     * skills at 5/hour, 20/24h per key). Default 5 (one hourly quota). 0 means "no cap". Updates are
     * never capped here because ClawHub does not rate-limit version updates of existing skills.
     */
    maxNewPerAccount: number;
}

export interface RunDeps {
    readText: (path: string) => string;
    exists: (path: string) => boolean;
    readVersion: (folder: string) => [string | null, string | null];
    readTitle: (folder: string) => string | null;
    makeChangelog: (folder: string, slug: string, version: string) => string;
    /** Publish one skill as `account` (its config path selects the token). Returns code + output. */
    publish: (cmd: string[], account: AccountRef) => PublishOutcome;
    publishConfig: PublishConfig;
    /** Accounts to publish under — name + config path only (no tokens). From clawhub_auth.ts. */
    accounts: AccountRef[];
    log: (line: string) => void;
    /** Optional sink for the Markdown results table ($GITHUB_STEP_SUMMARY). */
    writeSummary?: (lines: string[]) => void;
    /** Optional sink for machine-readable totals ($GITHUB_OUTPUT). */
    report?: (totals: Totals) => void;
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

    const targets = sel.candidates
        .map(c => classify(c, cfg.root, deps.readVersion))
        .map(t => ({ ...t, displayName: deps.readTitle(t.folder) }));

    const blocked: Blocked[] = targets.filter(t => t.error).map(t => ({ slug: t.slug, reason: t.error! }));
    const newTargets = targets.filter(t => t.action === "publish" && t.status === "new");
    const updateTargets = targets.filter(t => t.action === "publish" && t.status !== "new");

    deps.log("");
    for (const line of formatPlan(targets, cfg.owner)) deps.log(line);
    deps.log("");

    if (cfg.mode === "dry-run") {
        if (deps.accounts.length) {
            const plans = planDistribution(newTargets, updateTargets, deps.accounts, cfg.maxNewPerAccount);
            deps.log(`Distribution preview across ${deps.accounts.length} account(s) (cap ${cfg.maxNewPerAccount || "∞"} new/account):`);
            for (const p of plans)
                deps.log(`  - ${p.account.name}: ${p.newTargets.length} new + ${p.updateTargets.length} update this run, ${p.deferredNew.length} new deferred`);
        }
        deps.log("");
        deps.log("Dry-run: no skills were published.");
        if (blocked.length) {
            deps.log("");
            deps.log("These skills would be blocked until their metadata.version is bumped:");
            for (const b of blocked) deps.log(`  - ${b.reason}`);
        }
        return 0;
    }

    // Blocked skills (version not bumped / invalid / unreadable) are surfaced but non-fatal: the
    // healthy skills still publish, and a re-run picks the blocked ones up once they are fixed.
    for (const b of blocked) deps.log(`::warning::${b.reason}`);

    if (newTargets.length === 0 && updateTargets.length === 0) {
        deps.log("Nothing to publish after version checks.");
        deps.writeSummary?.(formatSummaryMarkdown([], blocked));
        deps.report?.(totalsOf([]));
        return 0;
    }

    if (deps.accounts.length === 0) {
        deps.log("::error::No publishing accounts available (CLAWHUB_TOKENS is empty or malformed) — cannot publish.");
        return 1;
    }

    const plans = planDistribution(newTargets, updateTargets, deps.accounts, cfg.maxNewPerAccount);
    const stats: AccountStats[] = [];
    let hardFailure = false;

    // Accounts are processed sequentially (no concurrency needed): each publishes its assigned new
    // skills (up to the cap) then its updates, stopping early on its own rate limit. Per-account
    // remaining = everything assigned that did not publish this run (over-cap, failed, or deferred).
    for (const plan of plans) {
        const s: AccountStats = { name: plan.account.name, published: 0, updated: 0, failed: 0, rateLimited: false, remaining: 0 };
        const queue: Array<{ kind: "new" | "update"; t: Target }> = [
            ...plan.newTargets.map(t => ({ kind: "new" as const, t })),
            ...plan.updateTargets.map(t => ({ kind: "update" as const, t })),
        ];
        const assigned = queue.length + plan.deferredNew.length;
        deps.log("");
        deps.log(`== ${plan.account.name}: attempting ${plan.newTargets.length} new + ${plan.updateTargets.length} update (${plan.deferredNew.length} new deferred to a later run) ==`);

        for (let i = 0; i < queue.length; i++) {
            const { kind, t } = queue[i]!;
            if (!t.displayName)
                deps.log(`::warning::${t.slug}: no metadata.title — ClawHub will derive the display name from the slug.`);
            deps.log(`==> [${plan.account.name} ${i + 1}/${queue.length}] ${t.slug} (${t.displayName ?? "auto"}) @ ${t.version} [${kind}]`);
            const changelog = deps.makeChangelog(t.folder, t.slug, t.version!);
            const cmd = buildPublishArgs(deps.publishConfig, t.folder, t.version!, changelog, t.displayName ?? null);
            const { code, output } = deps.publish(cmd, plan.account);
            if (code === 0) {
                if (kind === "new")
                    s.published++;
                else
                    s.updated++;
            }
            else if (isRateLimitError(output)) {
                // Quota exhausted for this key: stop now (everything left is deferred to a later run).
                s.rateLimited = true;
                deps.log(`::warning::[${plan.account.name}] ClawHub rate limit reached — deferring ${t.slug} and the rest to a later run.`);
                break;
            }
            else {
                s.failed++;
                hardFailure = true;
                deps.log(`::error::[${plan.account.name}] ${t.slug}: clawhub publish exited with code ${code}`);
            }
        }
        s.remaining = assigned - s.published - s.updated;
        stats.push(s);
    }

    const totals = totalsOf(stats);
    deps.log("");
    deps.log(`Done. Published ${totals.published} new, updated ${totals.updated}, failed ${totals.failed}, remaining ${totals.remaining}.`);
    if (totals.rateLimitedAccounts.length)
        deps.log(`Rate-limited account(s) this run: ${totals.rateLimitedAccounts.join(", ")}.`);
    if (totals.remaining > 0)
        deps.log(`${totals.remaining} skill(s) still pending — re-run the workflow (idempotent) to continue.`);
    deps.writeSummary?.(formatSummaryMarkdown(stats, blocked));
    deps.report?.(totals);

    // Genuine publish failures (non-rate-limit) fail the run; a rate limit or a remaining backlog is
    // expected back-pressure and exits 0 so the operator just re-runs.
    return hardFailure ? 1 : 0;
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
    const rawCap = env(getenv, "MAX_NEW_PER_ACCOUNT", "5").trim();
    const cap = Number.parseInt(rawCap, 10);
    return {
        mode: env(getenv, "MODE").trim(),
        skillPath: env(getenv, "SKILL_PATH").trim().replace(/\/+$/, ""),
        owner: env(getenv, "CLAWHUB_OWNER").trim(),
        root: env(getenv, "SKILLS_ROOT", "app-skills").trim().replace(/\/+$/, "") || "app-skills",
        syncJsonPath: env(getenv, "SYNC_JSON"),
        repo: env(getenv, "GITHUB_REPOSITORY"),
        sha: env(getenv, "GITHUB_SHA"),
        // garbage -> default 5; negative -> 0 (no cap).
        maxNewPerAccount: Number.isNaN(cap) ? 5 : Math.max(0, cap),
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

/**
 * Read the token-free accounts manifest written by clawhub_auth.ts: a JSON array of
 * {name, configPath}. Falls back to a single "default" account from CLAWHUB_CONFIG_PATH when no
 * manifest is set (e.g. a local single-token run). Never contains key material.
 */
export function readAccounts(getenv: Getenv, readText: (p: string) => string, exists: (p: string) => boolean, log: (l: string) => void): AccountRef[] {
    const manifestPath = env(getenv, "CLAWHUB_ACCOUNTS_MANIFEST").trim();
    if (manifestPath && exists(manifestPath)) {
        try {
            const parsed = JSON.parse(readText(manifestPath));
            if (Array.isArray(parsed)) {
                const refs = parsed
                    .filter(a => a && typeof a.name === "string" && typeof a.configPath === "string")
                    .map(a => ({ name: a.name as string, configPath: a.configPath as string }));
                if (refs.length)
                    return refs;
            }
        }
        catch (e) {
            log(`::warning::could not read accounts manifest at ${manifestPath}: ${e}`);
        }
    }
    const single = env(getenv, "CLAWHUB_CONFIG_PATH").trim();
    return single ? [{ name: "default", configPath: single }] : [];
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

/**
 * Publish one skill under a specific account by pointing clawhub at that account's config file via
 * CLAWHUB_CONFIG_PATH (so the token is selected from a file, never a command line or a log). Output
 * is captured to detect ClawHub's rate-limit message, then echoed through so the live log is intact.
 */
function realPublishFor(cmd: string[], account: AccountRef): PublishOutcome {
    const p = Bun.spawnSync(cmd, {
        stdin: "ignore",
        stdout: "pipe",
        stderr: "pipe",
        env: { ...process.env, CLAWHUB_CONFIG_PATH: account.configPath },
    });
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

    // Machine-readable totals for $GITHUB_OUTPUT so downstream steps/automation can branch on the
    // result (done = nothing failed and nothing left to publish). Token-free by construction.
    const outputPath = env(getenv, "GITHUB_OUTPUT").trim();
    const report = outputPath
        ? (t: Totals): void => {
                try {
                    appendFileSync(
                        outputPath,
                        `published=${t.published}\nupdated=${t.updated}\nfailed=${t.failed}\nremaining=${t.remaining}\n`
                        + `rate_limited=${t.rateLimitedAccounts.length > 0}\ndone=${t.remaining === 0 && t.failed === 0}\n`,
                    );
                }
                catch (e) {
                    log(`::warning::could not write step outputs to GITHUB_OUTPUT: ${e}`);
                }
            }
        : undefined;

    // The human-readable results table goes to $GITHUB_STEP_SUMMARY; with no summary file (local
    // runs) it is printed to the log instead. Account names only — never any token.
    const summaryPath = env(getenv, "GITHUB_STEP_SUMMARY").trim();
    const writeSummary = (lines: string[]): void => {
        if (summaryPath) {
            try {
                appendFileSync(summaryPath, `${lines.join("\n")}\n`);
                return;
            }
            catch (e) {
                log(`::warning::could not write step summary: ${e}`);
            }
        }
        for (const l of lines) log(l);
    };

    const deps: RunDeps = {
        readText,
        exists: existsSync,
        readVersion: folder => readManifestVersion(folder, readText),
        readTitle: folder => readManifestTitle(folder, readText),
        makeChangelog: cacheDir
            ? changelogFromCache
            : (folder, slug, version) => generateChangelog(folder, slug, version, cfg.repo, cfg.sha, codexCfg, changelogDeps),
        publish: realPublishFor,
        publishConfig: readPublishConfig(getenv),
        accounts: readAccounts(getenv, readText, existsSync, log),
        log,
        writeSummary,
        report,
    };

    process.exit(run(cfg, deps));
}
