/**
 * Pre-generate ClawHub changelogs in parallel, content-addressed for idempotency.
 *
 * The publish step (clawhub_publish.ts) is serial and used to run one ~20s
 * `codex exec` inline per skill — so a large catalog publish spent most of its
 * wall-clock generating changelogs one at a time. This step runs *before* publish and:
 *   1. Reads the same `clawhub sync --json` diff to learn which skills will publish.
 *   2. Generates each one's changelog with `codex exec`, up to N at a time (default 10).
 *   3. Writes the body to a content-addressed cache file `<cacheDir>/<hash>.md`.
 *
 * The cache makes it idempotent: the key folds in every file under the skill plus the
 * codex model/effort/prompt version (see hashSkillInputs in clawhub_publish.ts), so
 * re-running the workflow — e.g. after a failed publish — reuses every already-generated
 * changelog instead of paying codex again. The cache dir is persisted across CI re-runs
 * via actions/cache, and the publish step reads the same cache by the same hash.
 *
 * Best-effort: a skill whose codex run fails writes nothing, so publish falls back to a
 * plain changelog and the next re-run retries just that skill. codex is the ONLY thing
 * that runs here, so failures never block — this step always exits 0.
 *
 * Like clawhub_publish.ts: pure decision logic with all side effects injected, so the
 * orchestration is unit-testable without spawning anything. Real wiring is behind
 * `import.meta.main`. Run with: `bun clawhub_changelog.ts`. Tests: `bun test`.
 */
import type { CodexConfig, Spawned } from "./clawhub_publish.ts";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import process from "node:process";
import {
    applyExclusions,
    buildCodexArgs,
    CHANGELOG_PROMPT_VERSION,
    changelogCachePath,
    classify,
    filterReservedAdminSlugs,
    hashSkillInputs,
    listSkillFiles,
    parseExcludeSlugs,
    readCodexConfig,
    readManifestVersion,
    selectCandidates,
    sha256Hex,
} from "./clawhub_publish.ts";

// ----------------------------------------------------------------------------
// bounded-concurrency map
// ----------------------------------------------------------------------------
/**
 * Run `fn` over every item with at most `limit` calls in flight at once; results are
 * returned in input order. Workers pull from a shared cursor, so a slow item never
 * stalls the others — exactly what we want for many independent codex runs.
 */
export async function mapPool<T, R>(
    items: readonly T[],
    limit: number,
    fn: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
    const results = Array.from<R>({ length: items.length });
    let cursor = 0;
    const workers = Math.max(1, Math.min(limit, items.length || 1));
    async function worker(): Promise<void> {
        while (true) {
            const i = cursor++;
            if (i >= items.length)
                return;
            results[i] = await fn(items[i]!, i);
        }
    }
    await Promise.all(Array.from({ length: workers }, () => worker()));
    return results;
}

// ----------------------------------------------------------------------------
// generation
// ----------------------------------------------------------------------------
export interface GenerateConfig {
    mode: string;
    skillPath: string;
    root: string;
    syncJsonPath: string;
    cacheDir: string;
    concurrency: number;
    codex: CodexConfig;
    /** Slugs to skip this run (EXCLUDE_SKILLS) — must match the publish step's exclusions. */
    exclude?: readonly string[];
}

export interface GenerateDeps {
    readText: (path: string) => string;
    exists: (path: string) => boolean;
    readVersion: (folder: string) => [string | null, string | null];
    /** Content-addressed cache key for a skill folder (same hashing as the publish step). */
    hashInputs: (folder: string) => string;
    spawn: (cmd: string[]) => Promise<Spawned>;
    makeOutFile: () => string;
    writeCache: (path: string, body: string) => void;
    log: (line: string) => void;
}

/**
 * Generate (or reuse cached) changelogs for every publishable skill, concurrently.
 * Pure orchestration: returns the process exit code, never calls process.exit. Always
 * returns 0 — changelog generation is best-effort and must not block the publish.
 */
export async function runGenerate(cfg: GenerateConfig, deps: GenerateDeps): Promise<number> {
    const data = JSON.parse(deps.readText(cfg.syncJsonPath));

    // Mirror the publish step's candidate selection so we generate exactly the set it
    // will publish (and nothing more). selectCandidates' "done" cases are publish-step
    // gates (not-found, already-in-sync); here they just mean "nothing to generate".
    const sel = selectCandidates(data, cfg.mode, cfg.skillPath, cfg.root, deps.exists);
    const candidates = sel.done ? [] : sel.candidates;
    // Mirror the publish step's exclusions so we never burn a codex run on a skill the
    // publish step is going to skip.
    const { kept, excluded } = applyExclusions(candidates, new Set(cfg.exclude ?? []));
    if (excluded.length)
        deps.log(`Excluding ${excluded.length} skill(s) from this run by request: ${excluded.join(", ")}.`);
    // Mirror the publish step's reserved-"admin"-namespace skip so we never burn a codex
    // run on a slug ClawHub will reject at publish time.
    const { kept: publishable, skipped: reservedAdmin } = filterReservedAdminSlugs(kept);
    if (reservedAdmin.length)
        deps.log(`Skipping ${reservedAdmin.length} skill(s) in ClawHub's reserved "admin" slug namespace (slug cannot start with "admin-" or end with "-admin"): ${reservedAdmin.join(", ")}.`);
    const targets = publishable
        .map(c => classify(c, cfg.root, deps.readVersion))
        .filter(t => t.action === "publish");

    if (targets.length === 0) {
        deps.log("No changelogs to pre-generate.");
        return 0;
    }
    if (!cfg.codex.enabled || !cfg.codex.baseUrl || !cfg.codex.apiKeyPresent) {
        deps.log("::warning::codex disabled or unconfigured — skipping pre-generation; publish will use fallback changelogs.");
        return 0;
    }

    const total = targets.length;
    let generated = 0;
    let cached = 0;
    let failed = 0;

    await mapPool(targets, cfg.concurrency, async (t, i) => {
        const tag = `[${i + 1}/${total}] ${t.slug} @ ${t.version}`;
        const cachePath = changelogCachePath(cfg.cacheDir, deps.hashInputs(t.folder));
        if (deps.exists(cachePath)) {
            cached++;
            deps.log(`${tag}: cache hit`);
            return;
        }

        deps.log(`${tag}: generating…`);
        const outFile = deps.makeOutFile();
        const cmd = buildCodexArgs(cfg.codex, t.folder, t.slug, t.version!, outFile);

        let res: Spawned;
        try {
            res = await deps.spawn(cmd);
        }
        catch (e) {
            failed++;
            deps.log(`::warning::${t.slug}: failed to run codex (${e}) — publish will fall back.`);
            return;
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
            failed++;
            const detail = (res.stderr || "").trim().split(/\r?\n/).slice(-3).join(" | ");
            deps.log(`::warning::${t.slug}: codex changelog failed (exit ${res.exitCode}) — publish will fall back. ${detail}`);
            return;
        }

        deps.writeCache(cachePath, body);
        generated++;
        deps.log(`${tag}: done`);
    });

    deps.log("");
    deps.log(`Changelogs ready: ${generated} generated, ${cached} reused from cache, ${failed} failed (fallback at publish).`);
    return 0;
}

// ----------------------------------------------------------------------------
// real wiring (only runs when executed directly, not when imported by tests)
// ----------------------------------------------------------------------------
async function realSpawnAsync(cmd: string[]): Promise<Spawned> {
    const p = Bun.spawn(cmd, { stdin: "ignore", stdout: "pipe", stderr: "pipe" });
    const [stdout, stderr] = await Promise.all([
        new Response(p.stdout).text(),
        new Response(p.stderr).text(),
    ]);
    await p.exited;
    return { exitCode: p.exitCode ?? 0, stdout, stderr };
}

function envOf(name: string, def = ""): string {
    const v = process.env[name];
    return v === undefined ? def : v;
}

if (import.meta.main) {
    const getenv = (n: string): string | undefined => process.env[n];
    const codex = readCodexConfig(getenv);
    const readText = (p: string): string => readFileSync(p, "utf8");

    const cacheDir = envOf("CHANGELOG_CACHE_DIR").trim();
    if (!cacheDir) {
        // Non-fatal: without a cache dir there is nowhere to pre-generate into; let the
        // publish step generate inline / fall back as before.
        console.log("::warning::CHANGELOG_CACHE_DIR is not set — skipping changelog pre-generation.");
        process.exit(0);
    }
    mkdirSync(cacheDir, { recursive: true });

    const concurrency = Math.max(1, Number.parseInt(envOf("CHANGELOG_CONCURRENCY", "10"), 10) || 10);
    const hashCfg = { model: codex.model, effort: codex.effort, promptVersion: CHANGELOG_PROMPT_VERSION };
    const hashDeps = { listFiles: listSkillFiles, readText, hash: sha256Hex };

    const cfg: GenerateConfig = {
        mode: envOf("MODE").trim(),
        skillPath: envOf("SKILL_PATH").trim().replace(/\/+$/, ""),
        root: envOf("SKILLS_ROOT", "app-skills").trim().replace(/\/+$/, "") || "app-skills",
        syncJsonPath: envOf("SYNC_JSON"),
        cacheDir,
        concurrency,
        codex,
        exclude: [...parseExcludeSlugs(envOf("EXCLUDE_SKILLS"))],
    };

    const deps: GenerateDeps = {
        readText,
        exists: existsSync,
        readVersion: folder => readManifestVersion(folder, readText),
        hashInputs: folder => hashSkillInputs(folder, hashCfg, hashDeps),
        spawn: realSpawnAsync,
        makeOutFile: () => join(mkdtempSync(join(tmpdir(), "codex-changelog-")), "changelog.md"),
        writeCache: (path, body) => writeFileSync(path, body),
        log: line => console.log(line),
    };

    process.exit(await runGenerate(cfg, deps));
}
