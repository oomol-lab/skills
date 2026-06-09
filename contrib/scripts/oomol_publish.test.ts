import type { PackageFields, PublishOutcome, RunConfig, RunDeps, RunSummary, SkillManifest, StageDeps, Target } from "./oomol_publish.ts";
import { describe, expect, test } from "bun:test";
import {
    buildNpmPublishArgs,
    buildPackageJson,
    buildPackageOoYaml,
    classify,
    extractPublishedVersion,
    FIXED_PACKAGE_FILES,
    formatPlan,
    isAlreadyPublishedError,
    mapPool,
    packageInfoUrl,
    parseSkillManifest,
    readRunConfig,
    renderPackageJson,
    resolvePackageFields,
    run,
    stagePackage,
    unquoteScalar,
} from "./oomol_publish.ts";

// ---------------------------------------------------------------------------
// fixtures
// ---------------------------------------------------------------------------
const ABLY_SKILL = `---
name: oo-ably
description: "Ably (ably.com). Use this skill for ANY Ably request — reading, creating, updating, and deleting data."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Ably"
  author: "OOMOL"
  version: "1.0.0"
  service: "ably"
  categories: "Developer Tools"
  homepage: "https://ably.com"
  icon: "https://static.oomol.com/logo/third-party/ably.svg"
---

# Ably
body
`;

const NO_ICON_SKILL = `---
name: oo-tally
description: "Tally (tally.so)."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Tally"
  version: "1.2.0"
---

# Tally
`;

function manifest(over: Partial<SkillManifest> = {}): SkillManifest {
    return { name: "oo-x", description: "d", title: "X", version: "1.0.0", icon: null, ...over };
}

// ---------------------------------------------------------------------------
// unquoteScalar
// ---------------------------------------------------------------------------
describe("unquoteScalar", () => {
    test("strips double quotes and decodes escapes", () => {
        expect(unquoteScalar("\"Ably\"")).toBe("Ably");
        expect(unquoteScalar("\"a \\\"b\\\" c\"")).toBe("a \"b\" c");
    });
    test("strips single quotes and collapses '' escape", () => {
        expect(unquoteScalar("'it''s'")).toBe("it's");
    });
    test("leaves unquoted values trimmed", () => {
        expect(unquoteScalar("  1.0.0  ")).toBe("1.0.0");
    });
});

// ---------------------------------------------------------------------------
// parseSkillManifest
// ---------------------------------------------------------------------------
describe("parseSkillManifest", () => {
    test("extracts name/description/title/version/icon", () => {
        expect(parseSkillManifest(ABLY_SKILL)).toEqual({
            name: "oo-ably",
            description: "Ably (ably.com). Use this skill for ANY Ably request — reading, creating, updating, and deleting data.",
            title: "Ably",
            version: "1.0.0",
            icon: "https://static.oomol.com/logo/third-party/ably.svg",
        });
    });
    test("icon absent -> null", () => {
        expect(parseSkillManifest(NO_ICON_SKILL)).toEqual({
            name: "oo-tally",
            description: "Tally (tally.so).",
            title: "Tally",
            version: "1.2.0",
            icon: null,
        });
    });
    test("no frontmatter -> all null", () => {
        expect(parseSkillManifest("# just a heading\n")).toEqual({
            name: null,
            description: null,
            title: null,
            version: null,
            icon: null,
        });
    });
    test("indented version outside metadata is not mistaken for the manifest version", () => {
        const text = `---
name: oo-x
description: "d"
other:
  version: "9.9.9"
metadata:
  title: "X"
  version: "1.0.0"
---
`;
        expect(parseSkillManifest(text).version).toBe("1.0.0");
    });
});

// ---------------------------------------------------------------------------
// package manifests
// ---------------------------------------------------------------------------
describe("buildPackageJson", () => {
    const fields: PackageFields = { name: "oo-ably", version: "1.0.0", displayName: "Ably", description: "desc", icon: "i.svg" };

    test("includes icon and the fixed files list, in spec order", () => {
        const pkg = buildPackageJson(fields);
        expect(Object.keys(pkg)).toEqual(["name", "version", "displayName", "description", "icon", "files"]);
        expect(pkg.files).toEqual(FIXED_PACKAGE_FILES);
        expect(pkg.icon).toBe("i.svg");
    });
    test("omits icon when null", () => {
        const pkg = buildPackageJson({ ...fields, icon: null });
        expect("icon" in pkg).toBe(false);
        expect(Object.keys(pkg)).toEqual(["name", "version", "displayName", "description", "files"]);
    });
    test("files is a copy, not the shared constant", () => {
        const pkg = buildPackageJson(fields);
        expect(pkg.files).not.toBe(FIXED_PACKAGE_FILES);
    });
    test("renderPackageJson is valid JSON with trailing newline", () => {
        const text = renderPackageJson(fields);
        expect(text.endsWith("\n")).toBe(true);
        expect(JSON.parse(text).name).toBe("oo-ably");
    });
});

describe("buildPackageOoYaml", () => {
    test("emits JSON-quoted scalars and omits icon when null", () => {
        const yaml = buildPackageOoYaml({ name: "oo-x", version: "1.0.0", displayName: "X", description: "hi", icon: null });
        expect(yaml).toBe(`name: "oo-x"\nversion: "1.0.0"\ndisplayName: "X"\ndescription: "hi"\n`);
    });
    test("includes icon when present and escapes special chars", () => {
        const yaml = buildPackageOoYaml({ name: "oo-x", version: "1.0.0", displayName: "X", description: "a \"q\" b", icon: "i.svg" });
        expect(yaml).toContain(`icon: "i.svg"\n`);
        expect(yaml).toContain(`description: "a \\"q\\" b"`);
    });
});

describe("resolvePackageFields", () => {
    test("name is the slug; falls back to slug for missing title; empty/blank icon -> null", () => {
        expect(resolvePackageFields("oo-x", manifest({ title: null, icon: "  " }))).toEqual({
            name: "oo-x",
            version: "1.0.0",
            displayName: "oo-x",
            description: "d",
            icon: null,
        });
    });
    test("trims a present icon", () => {
        expect(resolvePackageFields("oo-x", manifest({ icon: "  i.svg  " })).icon).toBe("i.svg");
    });
});

// ---------------------------------------------------------------------------
// registry lookup
// ---------------------------------------------------------------------------
describe("packageInfoUrl", () => {
    test("builds the endpoint and strips trailing slashes from registry", () => {
        expect(packageInfoUrl("https://registry.oomol.com/", "oo-ably"))
            .toBe("https://registry.oomol.com/-/oomol/package-info/oo-ably/latest");
    });
});

describe("extractPublishedVersion", () => {
    test("404 -> null", () => {
        expect(extractPublishedVersion(404, `{"error":"[NOT_FOUND] ..."}`)).toBeNull();
    });
    test("error body -> null", () => {
        expect(extractPublishedVersion(200, `{"error":"nope"}`)).toBeNull();
    });
    test("reads version field", () => {
        expect(extractPublishedVersion(200, `{"name":"oo-ably","version":"1.2.3"}`)).toBe("1.2.3");
    });
    test("falls back to dist-tags.latest", () => {
        expect(extractPublishedVersion(200, `{"dist-tags":{"latest":"2.0.0"}}`)).toBe("2.0.0");
    });
    test("malformed JSON -> null", () => {
        expect(extractPublishedVersion(200, "<html>")).toBeNull();
    });
    test("non-200 (e.g. 5xx) -> null even with a version-like body", () => {
        expect(extractPublishedVersion(500, `{"version":"1.0.0"}`)).toBeNull();
        expect(extractPublishedVersion(403, `{"version":"1.0.0"}`)).toBeNull();
    });
});

describe("isAlreadyPublishedError", () => {
    test("detects npm version-conflict messages", () => {
        expect(isAlreadyPublishedError("npm error You cannot publish over the previously published versions: 1.0.0.")).toBe(true);
        expect(isAlreadyPublishedError("EPUBLISHCONFLICT")).toBe(true);
        // The exact string cnpmcore (registry.oomol.com) returns for a duplicate version.
        expect(isAlreadyPublishedError(
            "npm error 403 Forbidden - PUT https://registry.oomol.com/oo-x - [FORBIDDEN] Can't modify pre-existing version: oo-x@1.0.0",
        )).toBe(true);
        expect(isAlreadyPublishedError("403 Forbidden - cannot modify pre-existing version")).toBe(true);
    });
    test("does not flag unrelated errors", () => {
        expect(isAlreadyPublishedError("ENEEDAUTH: this command requires you to be logged in")).toBe(false);
        expect(isAlreadyPublishedError("network timeout")).toBe(false);
    });
});

// ---------------------------------------------------------------------------
// classify
// ---------------------------------------------------------------------------
describe("classify", () => {
    test("unpublished -> publish", () => {
        expect(classify("oo-x", "f", manifest(), null).action).toBe("publish");
    });
    test("newer manifest -> publish", () => {
        expect(classify("oo-x", "f", manifest({ version: "1.1.0" }), "1.0.0").action).toBe("publish");
    });
    test("same or older -> skip", () => {
        expect(classify("oo-x", "f", manifest({ version: "1.0.0" }), "1.0.0").action).toBe("skip");
        expect(classify("oo-x", "f", manifest({ version: "0.9.0" }), "1.0.0").action).toBe("skip");
    });
    test("missing version -> error", () => {
        expect(classify("oo-x", "f", manifest({ version: null }), null).action).toBe("error");
    });
    test("invalid semver -> error", () => {
        expect(classify("oo-x", "f", manifest({ version: "v1" }), null).action).toBe("error");
    });
});

// ---------------------------------------------------------------------------
// formatPlan
// ---------------------------------------------------------------------------
describe("formatPlan", () => {
    test("summarizes counts and sorts rows by slug", () => {
        const targets: Target[] = [
            classify("oo-b", "f", manifest(), null),
            classify("oo-a", "f", manifest({ version: "1.0.0" }), "1.0.0"),
        ];
        const lines = formatPlan(targets, "https://registry.oomol.com");
        expect(lines[0]).toContain("1 to publish, 1 up-to-date, 0 error(s)");
        // header is lines[1]; first data row is the alphabetically-first slug.
        expect(lines[2]!.startsWith("oo-a")).toBe(true);
    });
});

// ---------------------------------------------------------------------------
// buildNpmPublishArgs
// ---------------------------------------------------------------------------
describe("buildNpmPublishArgs", () => {
    test("real publish args", () => {
        expect(buildNpmPublishArgs("npm", "https://registry.oomol.com", "/tmp/s", false))
            .toEqual(["npm", "publish", "/tmp/s", "--registry", "https://registry.oomol.com", "--ignore-scripts"]);
    });
    test("dry-run appends --dry-run", () => {
        expect(buildNpmPublishArgs("npm", "https://r", "/tmp/s", true)).toContain("--dry-run");
    });
});

// ---------------------------------------------------------------------------
// mapPool
// ---------------------------------------------------------------------------
describe("mapPool", () => {
    test("preserves order and respects the concurrency limit", async () => {
        let inFlight = 0;
        let peak = 0;
        const out = await mapPool([1, 2, 3, 4, 5, 6, 7], 3, async (n) => {
            inFlight++;
            peak = Math.max(peak, inFlight);
            await Promise.resolve();
            inFlight--;
            return n * 2;
        });
        expect(out).toEqual([2, 4, 6, 8, 10, 12, 14]);
        expect(peak).toBeLessThanOrEqual(3);
    });
    test("handles an empty list", async () => {
        expect(await mapPool([], 4, async x => x)).toEqual([]);
    });
});

// ---------------------------------------------------------------------------
// stagePackage
// ---------------------------------------------------------------------------
describe("stagePackage", () => {
    test("writes package.json + package/package.oo.yaml and copies the skill", () => {
        const writes: Record<string, string> = {};
        const mkdirs: string[] = [];
        const copies: [string, string][] = [];
        const deps: StageDeps = {
            makeStageDir: slug => `/stage/${slug}`,
            mkdirp: p => void mkdirs.push(p),
            writeText: (p, c) => void (writes[p] = c),
            copyDir: (s, d) => void copies.push([s, d]),
        };
        const fields = resolvePackageFields("oo-ably", parseSkillManifest(ABLY_SKILL));
        const stage = stagePackage("app-skills/oo-ably", "oo-ably", fields, deps);

        expect(stage).toBe("/stage/oo-ably");
        expect(JSON.parse(writes["/stage/oo-ably/package.json"]!).files).toEqual(FIXED_PACKAGE_FILES);
        expect(writes["/stage/oo-ably/package/package.oo.yaml"]).toContain(`displayName: "Ably"`);
        expect(mkdirs).toContain("/stage/oo-ably/package");
        expect(mkdirs).toContain("/stage/oo-ably/package/skills/oo-ably");
        expect(copies).toEqual([["app-skills/oo-ably", "/stage/oo-ably/package/skills/oo-ably"]]);
    });
});

// ---------------------------------------------------------------------------
// run (orchestrator) — fully faked IO
// ---------------------------------------------------------------------------
interface Harness {
    deps: RunDeps;
    logs: string[];
    publishCalls: { stageDir: string; dryRun: boolean }[];
    reportCalls: RunSummary[];
}

function harness(opts: {
    slugs: string[];
    manifests: Record<string, string>;
    published: Record<string, { status: number; body: string }>;
    publishResult?: (slug: string) => PublishOutcome;
    /** Slugs whose publish should reject (e.g. the npm binary cannot be spawned). */
    throwOn?: string[];
}): Harness {
    const logs: string[] = [];
    const publishCalls: { stageDir: string; dryRun: boolean }[] = [];
    const reportCalls: RunSummary[] = [];
    const slugOf = (stageDir: string): string => stageDir.replace("/stage/", "");
    const deps: RunDeps = {
        listSkillSlugs: () => opts.slugs,
        readText: (p) => {
            const slug = p.replace(/^app-skills\//, "").replace(/\/SKILL\.md$/, "");
            const text = opts.manifests[slug];
            if (text === undefined)
                throw new Error(`no manifest for ${p}`);
            return text;
        },
        exists: p => opts.slugs.some(s => p === `app-skills/${s}/SKILL.md`),
        fetchPublished: async name => opts.published[name] ?? { status: 404, body: `{"error":"not found"}` },
        stage: {
            makeStageDir: slug => `/stage/${slug}`,
            mkdirp: () => {},
            writeText: () => {},
            copyDir: () => {},
        },
        publish: async (stageDir, o) => {
            publishCalls.push({ stageDir, dryRun: o.dryRun });
            const slug = slugOf(stageDir);
            if (opts.throwOn?.includes(slug))
                throw new Error(`Executable not found in $PATH: "npm" (${slug})`);
            return opts.publishResult ? opts.publishResult(slug) : { code: 0, output: "ok" };
        },
        log: l => void logs.push(l),
        report: s => void reportCalls.push(s),
    };
    return { deps, logs, publishCalls, reportCalls };
}

const CFG: RunConfig = { mode: "publish-catalog", skillPath: "", root: "app-skills", registry: "https://registry.oomol.com", concurrency: 10 };

describe("run", () => {
    test("publish-catalog publishes only unpublished/newer skills", async () => {
        const h = harness({
            slugs: ["oo-a", "oo-b", "oo-c"],
            manifests: {
                "oo-a": NO_ICON_SKILL, // version 1.2.0
                "oo-b": ABLY_SKILL, // version 1.0.0
                "oo-c": ABLY_SKILL, // version 1.0.0
            },
            published: {
                "oo-b": { status: 200, body: `{"version":"1.0.0"}` }, // already up to date -> skip
                "oo-c": { status: 200, body: `{"version":"0.9.0"}` }, // newer -> publish
                // oo-a: 404 -> publish
            },
        });
        const code = await run(CFG, h.deps);
        expect(code).toBe(0);
        const publishedSlugs = h.publishCalls.map(c => c.stageDir).sort();
        expect(publishedSlugs).toEqual(["/stage/oo-a", "/stage/oo-c"]);
        expect(h.publishCalls.every(c => c.dryRun === false)).toBe(true);
    });

    test("idempotent re-run publishes nothing when all are current", async () => {
        const h = harness({
            slugs: ["oo-b"],
            manifests: { "oo-b": ABLY_SKILL },
            published: { "oo-b": { status: 200, body: `{"version":"1.0.0"}` } },
        });
        const code = await run(CFG, h.deps);
        expect(code).toBe(0);
        expect(h.publishCalls).toEqual([]);
    });

    test("exclude drops listed skills before querying the registry", async () => {
        const h = harness({
            slugs: ["oo-a", "oo-b"],
            manifests: { "oo-a": NO_ICON_SKILL, "oo-b": ABLY_SKILL },
            published: {}, // both unpublished -> would publish if not excluded
        });
        const code = await run({ ...CFG, exclude: ["oo-a"] }, h.deps);
        expect(code).toBe(0);
        expect(h.publishCalls.map(c => c.stageDir)).toEqual(["/stage/oo-b"]);
        expect(h.logs.some(l => l.includes("Excluding 1 skill(s)") && l.includes("oo-a"))).toBe(true);
    });

    test("excluding every skill -> nothing published, zero totals, exit 0", async () => {
        const h = harness({
            slugs: ["oo-a", "oo-b"],
            manifests: { "oo-a": NO_ICON_SKILL, "oo-b": ABLY_SKILL },
            published: {},
        });
        const code = await run({ ...CFG, exclude: ["oo-a", "oo-b"] }, h.deps);
        expect(code).toBe(0);
        expect(h.publishCalls).toEqual([]);
        expect(h.reportCalls).toEqual([{ published: 0, skipped: 0, failed: 0, total: 0 }]);
        expect(h.logs.some(l => l.includes("No skills left to publish after exclusions"))).toBe(true);
    });

    test("a version-conflict publish failure is treated as an idempotent success", async () => {
        const h = harness({
            slugs: ["oo-b"],
            manifests: { "oo-b": ABLY_SKILL },
            published: {}, // 404 -> attempt publish
            publishResult: () => ({ code: 1, output: "npm error You cannot publish over the previously published versions: 1.0.0." }),
        });
        const code = await run(CFG, h.deps);
        expect(code).toBe(0);
        expect(h.logs.some(l => l.includes("already published"))).toBe(true);
    });

    test("the real cnpmcore duplicate-version rejection is treated as an idempotent success", async () => {
        const h = harness({
            slugs: ["oo-b"],
            manifests: { "oo-b": ABLY_SKILL },
            published: {}, // 404 race -> attempt publish, registry rejects as duplicate
            publishResult: () => ({
                code: 1,
                output: "npm error 403 Forbidden - PUT https://registry.oomol.com/oo-b - [FORBIDDEN] Can't modify pre-existing version: oo-b@1.0.0",
            }),
        });
        expect(await run(CFG, h.deps)).toBe(0);
        expect(h.logs.some(l => l.includes("already published"))).toBe(true);
    });

    test("a genuine publish failure makes the run fail", async () => {
        const h = harness({
            slugs: ["oo-b"],
            manifests: { "oo-b": ABLY_SKILL },
            published: {},
            publishResult: () => ({ code: 1, output: "npm error code E500 internal error" }),
        });
        expect(await run(CFG, h.deps)).toBe(1);
    });

    test("a publish that throws is recorded as failed without aborting the batch", async () => {
        const h = harness({
            slugs: ["oo-a", "oo-b"],
            manifests: { "oo-a": NO_ICON_SKILL, "oo-b": ABLY_SKILL },
            published: {},
            throwOn: ["oo-a"], // oo-a's publish rejects; oo-b must still publish
        });
        const code = await run(CFG, h.deps);
        expect(code).toBe(1);
        expect(h.publishCalls.map(c => c.stageDir).sort()).toEqual(["/stage/oo-a", "/stage/oo-b"]);
        expect(h.logs.some(l => l.includes("publish failed to run"))).toBe(true);
        // The run still reports a summary (1 published, 1 failed) instead of crashing.
        expect(h.reportCalls.at(-1)).toEqual({ published: 1, skipped: 0, failed: 1, total: 2 });
    });

    test("fails fast on an invalid version without publishing anything", async () => {
        const bad = ABLY_SKILL.replace(`version: "1.0.0"`, `version: "not-semver"`);
        const h = harness({ slugs: ["oo-b"], manifests: { "oo-b": bad }, published: {} });
        const code = await run(CFG, h.deps);
        expect(code).toBe(1);
        expect(h.publishCalls).toEqual([]);
        expect(h.logs.some(l => l.includes("Aborting publish"))).toBe(true);
    });

    test("dry-run validates with --dry-run, never uploads, and returns 0 even with errors", async () => {
        const bad = ABLY_SKILL.replace(`version: "1.0.0"`, `version: "not-semver"`);
        const h = harness({
            slugs: ["oo-a", "oo-bad"],
            manifests: { "oo-a": NO_ICON_SKILL, "oo-bad": bad },
            published: {},
        });
        const code = await run({ ...CFG, mode: "dry-run" }, h.deps);
        expect(code).toBe(0);
        // only the valid skill is staged + packed, and as a dry-run.
        expect(h.publishCalls).toEqual([{ stageDir: "/stage/oo-a", dryRun: true }]);
        expect(h.logs.some(l => l.includes("would block a real publish"))).toBe(true);
    });

    test("publish-single targets one folder", async () => {
        const h = harness({ slugs: ["oo-a", "oo-b"], manifests: { "oo-a": NO_ICON_SKILL, "oo-b": ABLY_SKILL }, published: {} });
        const code = await run({ ...CFG, mode: "publish-single", skillPath: "app-skills/oo-b" }, h.deps);
        expect(code).toBe(0);
        expect(h.publishCalls.map(c => c.stageDir)).toEqual(["/stage/oo-b"]);
    });

    test("publish-single errors when the folder has no SKILL.md", async () => {
        const h = harness({ slugs: ["oo-a"], manifests: { "oo-a": NO_ICON_SKILL }, published: {} });
        const code = await run({ ...CFG, mode: "publish-single", skillPath: "app-skills/oo-missing" }, h.deps);
        expect(code).toBe(1);
        expect(h.publishCalls).toEqual([]);
    });
});

// ---------------------------------------------------------------------------
// readRunConfig
// ---------------------------------------------------------------------------
describe("readRunConfig", () => {
    test("applies defaults", () => {
        const cfg = readRunConfig(() => undefined);
        expect(cfg).toEqual({ mode: "dry-run", skillPath: "", root: "app-skills", registry: "https://registry.oomol.com", concurrency: 10, exclude: [] });
    });
    test("reads overrides and trims trailing slashes", () => {
        const map: Record<string, string> = {
            MODE: "publish-catalog",
            SKILL_PATH: "app-skills/oo-x/",
            SKILLS_ROOT: "app-skills/",
            OOMOL_REGISTRY: "https://r.example.com/",
            PUBLISH_CONCURRENCY: "4",
        };
        const cfg = readRunConfig(n => map[n]);
        expect(cfg).toEqual({ mode: "publish-catalog", skillPath: "app-skills/oo-x", root: "app-skills", registry: "https://r.example.com", concurrency: 4, exclude: [] });
    });
    test("falls back to 10 for a non-positive concurrency", () => {
        expect(readRunConfig(n => (n === "PUBLISH_CONCURRENCY" ? "0" : undefined)).concurrency).toBe(10);
    });
    test("parses EXCLUDE_SKILLS into normalized slugs", () => {
        expect(readRunConfig(n => (n === "EXCLUDE_SKILLS" ? " oo-a , app-skills/oo-b ," : undefined)).exclude).toEqual(["oo-a", "oo-b"]);
    });
});
