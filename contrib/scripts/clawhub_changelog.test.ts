import type { GenerateConfig, GenerateDeps } from "./clawhub_changelog.ts";
import type { CodexConfig, HashInputsDeps } from "./clawhub_publish.ts";
import { describe, expect, test } from "bun:test";
import { mapPool, runGenerate } from "./clawhub_changelog.ts";
import { changelogCachePath, hashSkillInputs } from "./clawhub_publish.ts";

// ---------------------------------------------------------------------------
// mapPool
// ---------------------------------------------------------------------------
describe("mapPool", () => {
    test("preserves input order in results regardless of completion order", async () => {
        const out = await mapPool([30, 10, 20], 2, async (n) => {
            await new Promise(r => setTimeout(r, n / 10));
            return n + 1;
        });
        expect(out).toEqual([31, 11, 21]);
    });

    test("never exceeds the concurrency limit", async () => {
        let inFlight = 0;
        let peak = 0;
        await mapPool(Array.from({ length: 12 }, (_, i) => i), 3, async () => {
            inFlight++;
            peak = Math.max(peak, inFlight);
            await new Promise(r => setTimeout(r, 1));
            inFlight--;
            return null;
        });
        expect(peak).toBeLessThanOrEqual(3);
    });

    test("runs every item even when there are fewer items than the limit", async () => {
        const seen: number[] = [];
        await mapPool([1, 2], 10, async (n) => {
            seen.push(n);
            return n;
        });
        expect(seen.sort()).toEqual([1, 2]);
    });

    test("empty input resolves to an empty array without calling fn", async () => {
        let calls = 0;
        const out = await mapPool([], 4, async () => {
            calls++;
            return 1;
        });
        expect(out).toEqual([]);
        expect(calls).toBe(0);
    });
});

// ---------------------------------------------------------------------------
// hashSkillInputs / changelogCachePath (the content-addressed cache key)
// ---------------------------------------------------------------------------
describe("hashSkillInputs", () => {
    const cfg = { model: "gpt-5.5", effort: "medium", promptVersion: "1" };
    const realHash = (s: string): string => new Bun.CryptoHasher("sha256").update(s).digest("hex");
    const mk = (skillBody = "v1"): HashInputsDeps => ({
        listFiles: () => ["actions/a.ts", "SKILL.md"],
        readText: p => (p.endsWith("SKILL.md") ? skillBody : "code"),
        hash: realHash,
    });

    test("is stable for identical inputs", () => {
        expect(hashSkillInputs("f", cfg, mk())).toBe(hashSkillInputs("f", cfg, mk()));
    });

    test("is independent of listFiles order", () => {
        const reversed: HashInputsDeps = { ...mk(), listFiles: () => ["SKILL.md", "actions/a.ts"] };
        expect(hashSkillInputs("f", cfg, mk())).toBe(hashSkillInputs("f", cfg, reversed));
    });

    test("changes when a file's content changes", () => {
        expect(hashSkillInputs("f", cfg, mk("v1"))).not.toBe(hashSkillInputs("f", cfg, mk("v2")));
    });

    test("changes when the codex model changes", () => {
        expect(hashSkillInputs("f", { ...cfg, model: "x" }, mk())).not.toBe(
            hashSkillInputs("f", { ...cfg, model: "y" }, mk()),
        );
    });

    test("changes when the prompt version is bumped", () => {
        expect(hashSkillInputs("f", { ...cfg, promptVersion: "1" }, mk())).not.toBe(
            hashSkillInputs("f", { ...cfg, promptVersion: "2" }, mk()),
        );
    });
});

describe("changelogCachePath", () => {
    test("is <cacheDir>/<hash>.md", () => {
        expect(changelogCachePath("/tmp/cache", "abc123")).toBe("/tmp/cache/abc123.md");
    });
});

// ---------------------------------------------------------------------------
// runGenerate
// ---------------------------------------------------------------------------
const codex: CodexConfig = {
    enabled: true,
    bin: "codex",
    model: "gpt-5.5",
    effort: "medium",
    provider: "oomol",
    wireApi: "responses",
    baseUrl: "https://api.example",
    apiKeyEnv: "OPENAI_API_KEY",
    apiKeyPresent: true,
};

const SYNC = JSON.stringify({
    wouldPublish: [{ folder: "app-skills/oo-foo", slug: "oo-foo", status: "new", latestVersion: null }],
});

function baseCfg(overrides: Partial<GenerateConfig> = {}): GenerateConfig {
    return {
        mode: "publish-catalog",
        skillPath: "",
        root: "app-skills",
        syncJsonPath: "sync.json",
        cacheDir: "cache",
        concurrency: 4,
        codex,
        ...overrides,
    };
}

interface Recorder {
    spawned: string[][];
    written: [string, string][];
    logs: string[];
}

function makeDeps(over: Partial<GenerateDeps> & { recorder: Recorder; outBody?: string; exitCode?: number; cacheHit?: boolean }): GenerateDeps {
    const { recorder, outBody = "## Notes\nbody", exitCode = 0, cacheHit = false } = over;
    return {
        readText: (p) => {
            if (p === "sync.json")
                return SYNC;
            if (p === "out.md")
                return `  ${outBody}  `;
            throw new Error(`unexpected read ${p}`);
        },
        exists: (p) => {
            if (p === "out.md")
                return true;
            if (p === "cache/HASH.md")
                return cacheHit;
            return false;
        },
        readVersion: () => ["1.0.0", null],
        hashInputs: () => "HASH",
        spawn: async (cmd) => {
            recorder.spawned.push(cmd);
            return { exitCode, stdout: "", stderr: exitCode === 0 ? "" : "boom" };
        },
        makeOutFile: () => "out.md",
        writeCache: (path, body) => recorder.written.push([path, body]),
        log: line => recorder.logs.push(line),
        ...over,
    };
}

describe("runGenerate", () => {
    test("generates on a cache miss and writes the trimmed body to the cache path", async () => {
        const recorder: Recorder = { spawned: [], written: [], logs: [] };
        const code = await runGenerate(baseCfg(), makeDeps({ recorder }));
        expect(code).toBe(0);
        expect(recorder.spawned.length).toBe(1);
        expect(recorder.written).toEqual([["cache/HASH.md", "## Notes\nbody"]]);
    });

    test("skips generation on a cache hit (never spawns codex)", async () => {
        const recorder: Recorder = { spawned: [], written: [], logs: [] };
        const code = await runGenerate(baseCfg(), makeDeps({ recorder, cacheHit: true }));
        expect(code).toBe(0);
        expect(recorder.spawned.length).toBe(0);
        expect(recorder.written).toEqual([]);
        expect(recorder.logs.some(l => l.includes("cache hit"))).toBe(true);
    });

    test("a non-zero codex exit writes nothing (publish falls back) but does not fail", async () => {
        const recorder: Recorder = { spawned: [], written: [], logs: [] };
        const code = await runGenerate(baseCfg(), makeDeps({ recorder, exitCode: 1 }));
        expect(code).toBe(0);
        expect(recorder.spawned.length).toBe(1);
        expect(recorder.written).toEqual([]);
        expect(recorder.logs.some(l => l.includes("will fall back"))).toBe(true);
    });

    test("empty codex output writes nothing", async () => {
        const recorder: Recorder = { spawned: [], written: [], logs: [] };
        const code = await runGenerate(baseCfg(), makeDeps({ recorder, outBody: "" }));
        expect(code).toBe(0);
        expect(recorder.written).toEqual([]);
    });

    test("disabled codex returns 0 without spawning", async () => {
        const recorder: Recorder = { spawned: [], written: [], logs: [] };
        const code = await runGenerate(baseCfg({ codex: { ...codex, enabled: false } }), makeDeps({ recorder }));
        expect(code).toBe(0);
        expect(recorder.spawned.length).toBe(0);
        expect(recorder.logs.some(l => l.includes("skipping pre-generation"))).toBe(true);
    });

    test("missing base url / api key returns 0 without spawning", async () => {
        const recorder: Recorder = { spawned: [], written: [], logs: [] };
        const code = await runGenerate(baseCfg({ codex: { ...codex, apiKeyPresent: false } }), makeDeps({ recorder }));
        expect(code).toBe(0);
        expect(recorder.spawned.length).toBe(0);
    });

    test("no publishable targets returns 0 without spawning", async () => {
        const recorder: Recorder = { spawned: [], written: [], logs: [] };
        const deps = makeDeps({ recorder });
        const emptyDeps: GenerateDeps = { ...deps, readText: p => (p === "sync.json" ? JSON.stringify({ wouldPublish: [] }) : deps.readText(p)) };
        const code = await runGenerate(baseCfg(), emptyDeps);
        expect(code).toBe(0);
        expect(recorder.spawned.length).toBe(0);
        expect(recorder.logs.some(l => l.includes("No changelogs to pre-generate"))).toBe(true);
    });

    test("excludes a listed skill so codex never runs for it", async () => {
        const recorder: Recorder = { spawned: [], written: [], logs: [] };
        const code = await runGenerate(baseCfg({ exclude: ["oo-foo"] }), makeDeps({ recorder }));
        expect(code).toBe(0);
        expect(recorder.spawned.length).toBe(0);
        expect(recorder.written).toEqual([]);
        expect(recorder.logs.some(l => l.includes("Excluding 1 skill(s)") && l.includes("oo-foo"))).toBe(true);
    });

    test("a non-matching exclude entry leaves generation untouched", async () => {
        const recorder: Recorder = { spawned: [], written: [], logs: [] };
        const code = await runGenerate(baseCfg({ exclude: ["oo-other"] }), makeDeps({ recorder }));
        expect(code).toBe(0);
        expect(recorder.spawned.length).toBe(1);
    });

    test("skips a target whose metadata.version was not bumped (action !== publish)", async () => {
        const recorder: Recorder = { spawned: [], written: [], logs: [] };
        const deps = makeDeps({ recorder });
        // status=update with an equal registry version classifies to "skip", not "publish".
        const notBumped: GenerateDeps = {
            ...deps,
            readText: p => (p === "sync.json"
                ? JSON.stringify({ wouldPublish: [{ folder: "app-skills/oo-foo", slug: "oo-foo", status: "update", latestVersion: "1.0.0" }] })
                : deps.readText(p)),
        };
        const code = await runGenerate(baseCfg(), notBumped);
        expect(code).toBe(0);
        expect(recorder.spawned.length).toBe(0);
    });
});
