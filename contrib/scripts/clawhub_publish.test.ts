import type { Candidate, ChangelogDeps, CodexConfig, RunConfig, RunDeps, Spawned } from "./clawhub_publish.ts";
import { describe, expect, test } from "bun:test";
import {
    buildCodexArgs,
    buildFallbackChangelog,
    buildPublishArgs,
    buildSourceLine,
    classify,
    extractManifestTitle,
    extractManifestVersion,
    formatPlan,
    generateChangelog,
    isRateLimitError,
    limitPublishTargets,
    parseSemver,
    readCodexConfig,
    readManifestTitle,
    readManifestVersion,
    readPublishConfig,
    readRunConfig,
    run,
    selectCandidates,
    semverGt,

} from "./clawhub_publish.ts";

// ---------------------------------------------------------------------------
// semver
// ---------------------------------------------------------------------------
describe("parseSemver", () => {
    test("parses core versions", () => {
        expect(parseSemver("1.2.3")).toEqual({ major: 1, minor: 2, patch: 3, pre: null });
    });
    test("parses prerelease and ignores build metadata", () => {
        expect(parseSemver("1.0.0-rc.1")).toEqual({ major: 1, minor: 0, patch: 0, pre: "rc.1" });
        expect(parseSemver("1.0.0+build.5")).toEqual({ major: 1, minor: 0, patch: 0, pre: null });
    });
    test("rejects non-semver", () => {
        expect(parseSemver("1.0")).toBeNull();
        expect(parseSemver("v1.0.0")).toBeNull();
        expect(parseSemver("latest")).toBeNull();
    });
});

describe("semverGt", () => {
    test("compares core components", () => {
        expect(semverGt("1.2.0", "1.1.0")).toBe(true);
        expect(semverGt("2.0.0", "1.5.0")).toBe(true);
        expect(semverGt("1.0.1", "1.0.0")).toBe(true);
        expect(semverGt("1.0.0", "1.0.1")).toBe(false);
    });
    test("equal is not greater", () => {
        expect(semverGt("1.0.0", "1.0.0")).toBe(false);
    });
    test("release outranks prerelease; prerelease compared lexically", () => {
        expect(semverGt("1.0.0", "1.0.0-rc.1")).toBe(true);
        expect(semverGt("1.0.0-rc.1", "1.0.0")).toBe(false);
        expect(semverGt("1.0.0-rc.2", "1.0.0-rc.1")).toBe(true);
    });
    test("invalid inputs are never greater", () => {
        expect(semverGt("garbage", "1.0.0")).toBe(false);
        expect(semverGt("1.0.0", "garbage")).toBe(false);
    });
});

// ---------------------------------------------------------------------------
// manifest version extraction
// ---------------------------------------------------------------------------
describe("extractManifestVersion", () => {
    const md = (v: string) => `---\nname: x\nmetadata:\n  title: "X"\n  version: "${v}"\n---\n# X\n`;

    test("reads quoted version under metadata", () => {
        expect(extractManifestVersion(md("1.4.2"))).toEqual(["1.4.2", null]);
    });
    test("reads unquoted version", () => {
        expect(extractManifestVersion("---\nmetadata:\n  version: 2.0.0\n---\n")).toEqual(["2.0.0", null]);
    });
    test("does not match a top-level (unindented) version key", () => {
    // top-level `version:` has no leading whitespace, so it must not match
        expect(extractManifestVersion("---\nversion: 9.9.9\n---\n")).toEqual([null, "has no metadata.version field"]);
    });
    test("errors without frontmatter", () => {
        expect(extractManifestVersion("# no frontmatter\n")).toEqual([null, "has no YAML frontmatter"]);
    });
    test("errors when version is absent", () => {
        expect(extractManifestVersion("---\nname: x\n---\n")).toEqual([null, "has no metadata.version field"]);
    });
});

describe("readManifestVersion", () => {
    test("prefixes the path on success-less reads", () => {
        const readText = () => "---\nname: x\n---\n";
        expect(readManifestVersion("app-skills/foo", readText)).toEqual([null, "app-skills/foo/SKILL.md has no metadata.version field"]);
    });
    test("reports read failures", () => {
        const readText = () => {
            throw new Error("ENOENT");
        };
        const [v, err] = readManifestVersion("app-skills/foo", readText);
        expect(v).toBeNull();
        expect(err).toContain("cannot read app-skills/foo/SKILL.md");
    });
    test("returns the version on success", () => {
        const readText = () => `---\nmetadata:\n  version: "3.1.0"\n---\n`;
        expect(readManifestVersion("app-skills/foo", readText)).toEqual(["3.1.0", null]);
    });
});

// ---------------------------------------------------------------------------
// manifest title extraction (display name)
// ---------------------------------------------------------------------------
describe("extractManifestTitle", () => {
    test("reads a quoted title under metadata and strips the quotes", () => {
        expect(extractManifestTitle(`---\nname: oo-ably\nmetadata:\n  title: "Ably"\n  version: "1.0.0"\n---\n`)).toBe("Ably");
    });
    test("preserves curated casing and inner spaces", () => {
        expect(extractManifestTitle(`---\nmetadata:\n  title: "Alibaba Cloud OSS"\n---\n`)).toBe("Alibaba Cloud OSS");
        expect(extractManifestTitle(`---\nmetadata:\n  title: "AbuseIPDB"\n---\n`)).toBe("AbuseIPDB");
    });
    test("reads an unquoted title", () => {
        expect(extractManifestTitle(`---\nmetadata:\n  title: Airtable\n---\n`)).toBe("Airtable");
    });
    test("does not match a top-level (unindented) title key", () => {
        expect(extractManifestTitle(`---\ntitle: Nope\n---\n`)).toBeNull();
    });
    test("returns null without frontmatter or when title is absent", () => {
        expect(extractManifestTitle("# no frontmatter\n")).toBeNull();
        expect(extractManifestTitle(`---\nname: x\n---\n`)).toBeNull();
    });
});

describe("readManifestTitle", () => {
    test("returns the title on success", () => {
        const readText = () => `---\nmetadata:\n  title: "Convex"\n---\n`;
        expect(readManifestTitle("app-skills/oo-convex", readText)).toBe("Convex");
    });
    test("returns null on read failure (non-fatal)", () => {
        const readText = () => {
            throw new Error("ENOENT");
        };
        expect(readManifestTitle("app-skills/oo-convex", readText)).toBeNull();
    });
});

// ---------------------------------------------------------------------------
// classify
// ---------------------------------------------------------------------------
describe("classify", () => {
    const ver = (v: string) => () => [v, null] as [string | null, string | null];

    test("new skill -> publish", () => {
        const c: Candidate = { slug: "ably", folder: "app-skills/ably", status: "new", latestVersion: null };
        const t = classify(c, "app-skills", ver("1.0.0"));
        expect(t.action).toBe("publish");
        expect(t.version).toBe("1.0.0");
        expect(t.error).toBeNull();
    });
    test("update bumped above registry -> publish", () => {
        const c: Candidate = { slug: "notion", folder: "app-skills/notion", status: "update", latestVersion: "1.1.0" };
        expect(classify(c, "app-skills", ver("1.2.0")).action).toBe("publish");
    });
    test("update not bumped (equal) -> skip with remediation error", () => {
        const c: Candidate = { slug: "slack", folder: "app-skills/slack", status: "update", latestVersion: "1.0.0" };
        const t = classify(c, "app-skills", ver("1.0.0"));
        expect(t.action).toBe("skip");
        expect(t.error).toContain("not greater than the published version '1.0.0'");
        expect(t.error).toContain("app-skills/slack/SKILL.md");
    });
    test("update below registry -> skip", () => {
        const c: Candidate = { slug: "x", folder: "app-skills/x", status: "update", latestVersion: "2.0.0" };
        expect(classify(c, "app-skills", ver("1.9.0")).action).toBe("skip");
    });
    test("invalid manifest semver -> error", () => {
        const c: Candidate = { slug: "x", folder: "app-skills/x", status: "new", latestVersion: null };
        const t = classify(c, "app-skills", ver("not-semver"));
        expect(t.action).toBe("error");
        expect(t.error).toContain("is not valid semver");
    });
    test("manifest read error -> error", () => {
        const c: Candidate = { slug: "x", folder: "app-skills/x", status: "new", latestVersion: null };
        const t = classify(c, "app-skills", () => [null, "boom"]);
        expect(t.action).toBe("error");
        expect(t.error).toBe("x: boom");
    });
    test("derives slug from folder when missing", () => {
        const c: Candidate = { folder: "app-skills/derived", status: "new", latestVersion: null };
        expect(classify(c, "app-skills", ver("1.0.0")).slug).toBe("derived");
    });
});

// ---------------------------------------------------------------------------
// selectCandidates
// ---------------------------------------------------------------------------
describe("selectCandidates", () => {
    const data = {
        wouldPublish: [
            { slug: "ably", folder: "/r/app-skills/ably", status: "new", latestVersion: null },
            { slug: "jira", folder: "/r/app-skills/jira", status: "update", latestVersion: "1.0.0" },
        ] as Candidate[],
    };

    test("catalog returns all candidates", () => {
        const r = selectCandidates(data, "publish-catalog", "", "app-skills", () => false);
        expect(r.done).toBeUndefined();
        expect(r.candidates.map(c => c.slug)).toEqual(["ably", "jira"]);
    });
    test("single narrows by folder basename", () => {
        const r = selectCandidates(data, "publish-single", "app-skills/jira", "app-skills", () => false);
        expect(r.candidates.map(c => c.slug)).toEqual(["jira"]);
    });
    test("single, skill exists but unchanged -> done code 0", () => {
        const r = selectCandidates(data, "publish-single", "app-skills/unchanged", "app-skills", p => p === "app-skills/unchanged/SKILL.md");
        expect(r.done).toEqual({ code: 0, message: expect.stringContaining("already in sync") });
    });
    test("single, skill not found -> done code 1", () => {
        const r = selectCandidates(data, "publish-single", "app-skills/missing", "app-skills", () => false);
        expect(r.done?.code).toBe(1);
        expect(r.done?.error).toContain("was not found");
    });
});

// ---------------------------------------------------------------------------
// changelog builders
// ---------------------------------------------------------------------------
describe("changelog builders", () => {
    test("buildSourceLine", () => {
        expect(buildSourceLine("oomol-lab/skills", "abcdef1234567")).toBe("Source: `oomol-lab/skills@abcdef1`");
        expect(buildSourceLine("", "abc")).toBe("");
    });
    test("buildFallbackChangelog appends source", () => {
        expect(buildFallbackChangelog("ably", "1.0.0", "oomol-lab/skills", "abcdef1234567")).toBe(
            "Automated publish of **ably** v1.0.0.\n\nSource: `oomol-lab/skills@abcdef1`",
        );
    });
    test("buildFallbackChangelog without repo omits source", () => {
        expect(buildFallbackChangelog("ably", "1.0.0", "", "")).toBe("Automated publish of **ably** v1.0.0.");
    });
});

describe("buildCodexArgs", () => {
    const cfg: CodexConfig = {
        enabled: true,
        bin: "codex",
        model: "gpt-5.5",
        effort: "high",
        provider: "oomol",
        wireApi: "responses",
        baseUrl: "https://example/v1",
        apiKeyEnv: "OPENAI_API_KEY",
        apiKeyPresent: true,
    };
    const args = buildCodexArgs(cfg, "/r/app-skills/ably", "ably", "1.0.0", "/tmp/cl.md");

    test("uses exec, model, working dir and output file", () => {
        expect(args.slice(0, 6)).toEqual(["codex", "exec", "-m", "gpt-5.5", "-C", "/r/app-skills/ably"]);
        expect(args).toContain("-o");
        expect(args[args.indexOf("-o") + 1]).toBe("/tmp/cl.md");
    });
    test("passes provider config and high effort via -c overrides", () => {
        expect(args).toContain(`model_provider="oomol"`);
        expect(args).toContain(`model_providers.oomol.base_url="https://example/v1"`);
        expect(args).toContain(`model_providers.oomol.env_key="OPENAI_API_KEY"`);
        expect(args).toContain(`model_providers.oomol.wire_api="responses"`);
        expect(args).toContain(`model_reasoning_effort="high"`);
    });
    test("runs read-only and non-interactive", () => {
        expect(args).toContain("read-only");
        expect(args).toContain("--ignore-user-config");
        expect(args[args.length - 1]).toContain("release notes");
    });
});

describe("buildPublishArgs", () => {
    const cfg = { bin: "clawhub", registry: "https://r", site: "https://s", owner: "oomol" };
    const args = buildPublishArgs(cfg, "/r/app-skills/ably", "1.0.0", "notes");

    test("global flags precede the publish subcommand", () => {
        const pub = args.indexOf("publish");
        expect(args.indexOf("--registry")).toBeLessThan(pub);
        expect(args.indexOf("--no-input")).toBeLessThan(pub);
        expect(args[pub + 1]).toBe("/r/app-skills/ably");
    });
    test("carries owner, version, tags and changelog", () => {
        expect(args[args.indexOf("--owner") + 1]).toBe("oomol");
        expect(args[args.indexOf("--version") + 1]).toBe("1.0.0");
        expect(args[args.indexOf("--tags") + 1]).toBe("latest");
        expect(args[args.indexOf("--changelog") + 1]).toBe("notes");
    });
    test("omits --name when no display name is given", () => {
        expect(args).not.toContain("--name");
    });
    test("passes a curated display name via --name without disturbing the folder arg", () => {
        const withName = buildPublishArgs(cfg, "/r/app-skills/oo-ably", "1.0.0", "notes", "Ably");
        expect(withName[withName.indexOf("--name") + 1]).toBe("Ably");
        // folder stays the first positional after the publish subcommand
        expect(withName[withName.indexOf("publish") + 1]).toBe("/r/app-skills/oo-ably");
    });
    test("treats a blank display name as absent", () => {
        expect(buildPublishArgs(cfg, "/r/app-skills/oo-ably", "1.0.0", "notes", "   ")).not.toContain("--name");
    });
});

// ---------------------------------------------------------------------------
// isRateLimitError
// ---------------------------------------------------------------------------
describe("isRateLimitError", () => {
    test("matches ClawHub's hourly new-skill quota message", () => {
        expect(isRateLimitError("✖ Rate limit: max 5 new skills per hour. Please wait before publishing more.")).toBe(true);
    });
    test("matches either phrasing independently", () => {
        expect(isRateLimitError("RATE LIMIT exceeded")).toBe(true);
        expect(isRateLimitError("you may publish 5 new skills per hour")).toBe(true);
    });
    test("does not match unrelated failures", () => {
        expect(isRateLimitError("Error: network timeout")).toBe(false);
        expect(isRateLimitError("")).toBe(false);
    });
});

// ---------------------------------------------------------------------------
// limitPublishTargets
// ---------------------------------------------------------------------------
describe("limitPublishTargets", () => {
    const t = (slug: string) => ({ slug });

    test("sorts by slug and keeps the first N", () => {
        const out = limitPublishTargets([t("c"), t("a"), t("b"), t("d")], 2);
        expect(out.map(x => x.slug)).toEqual(["a", "b"]);
    });
    test("limit 0 returns everything (still sorted)", () => {
        const out = limitPublishTargets([t("c"), t("a"), t("b")], 0);
        expect(out.map(x => x.slug)).toEqual(["a", "b", "c"]);
    });
    test("limit >= length returns everything", () => {
        expect(limitPublishTargets([t("a"), t("b")], 5).map(x => x.slug)).toEqual(["a", "b"]);
    });
    test("is deterministic — same input, same first N across calls", () => {
        const input = [t("oo-zeta"), t("oo-alpha"), t("oo-mid"), t("oo-beta")];
        expect(limitPublishTargets(input, 2).map(x => x.slug)).toEqual(limitPublishTargets(input, 2).map(x => x.slug));
        expect(limitPublishTargets(input, 2).map(x => x.slug)).toEqual(["oo-alpha", "oo-beta"]);
    });
    test("does not mutate the input array", () => {
        const input = [t("c"), t("a"), t("b")];
        limitPublishTargets(input, 1);
        expect(input.map(x => x.slug)).toEqual(["c", "a", "b"]);
    });
});

// ---------------------------------------------------------------------------
// generateChangelog (with injected spawn/io)
// ---------------------------------------------------------------------------
describe("generateChangelog", () => {
    const cfg: CodexConfig = {
        enabled: true,
        bin: "codex",
        model: "gpt-5.5",
        effort: "high",
        provider: "oomol",
        wireApi: "responses",
        baseUrl: "https://example/v1",
        apiKeyEnv: "OPENAI_API_KEY",
        apiKeyPresent: true,
    };
    const okSpawn = (): Spawned => ({ exitCode: 0, stdout: "", stderr: "" });
    const baseDeps = (over: Partial<ChangelogDeps> = {}): { deps: ChangelogDeps; logs: string[] } => {
        const logs: string[] = [];
        const deps: ChangelogDeps = {
            spawn: okSpawn,
            exists: () => true,
            readText: () => "- generated bullet",
            makeOutFile: () => "/tmp/out.md",
            log: l => logs.push(l),
            ...over,
        };
        return { deps, logs };
    };

    test("disabled -> fallback, never spawns", () => {
        let spawned = false;
        const { deps } = baseDeps({ spawn: () => {
            spawned = true;
            return okSpawn();
        } });
        const out = generateChangelog("/f", "ably", "1.0.0", "oomol-lab/skills", "abcdef1", { ...cfg, enabled: false }, deps);
        expect(spawned).toBe(false);
        expect(out).toBe(buildFallbackChangelog("ably", "1.0.0", "oomol-lab/skills", "abcdef1"));
    });

    test("missing base url -> fallback + warning", () => {
        const { deps, logs } = baseDeps();
        const out = generateChangelog("/f", "ably", "1.0.0", "r", "abc", { ...cfg, baseUrl: "" }, deps);
        expect(out).toContain("Automated publish");
        expect(logs.some(l => l.includes("::warning::") && l.includes("is not set"))).toBe(true);
    });

    test("success -> codex body plus source line", () => {
        const { deps } = baseDeps({ readText: () => "- one\n- two" });
        const out = generateChangelog("/f", "ably", "1.0.0", "oomol-lab/skills", "abcdef1234", cfg, deps);
        expect(out).toBe("- one\n- two\n\nSource: `oomol-lab/skills@abcdef1`");
    });

    test("non-zero exit -> fallback + warning", () => {
        const { deps, logs } = baseDeps({ spawn: () => ({ exitCode: 2, stdout: "", stderr: "kaboom" }) });
        const out = generateChangelog("/f", "ably", "1.0.0", "r", "abc", cfg, deps);
        expect(out).toContain("Automated publish");
        expect(logs.some(l => l.includes("codex changelog failed (exit 2)"))).toBe(true);
    });

    test("empty body -> fallback", () => {
        const { deps } = baseDeps({ readText: () => "   " });
        expect(generateChangelog("/f", "ably", "1.0.0", "r", "abc", cfg, deps)).toContain("Automated publish");
    });

    test("spawn throws (binary missing) -> fallback + warning", () => {
        const { deps, logs } = baseDeps({ spawn: () => {
            throw new Error("ENOENT");
        } });
        const out = generateChangelog("/f", "ably", "1.0.0", "r", "abc", cfg, deps);
        expect(out).toContain("Automated publish");
        expect(logs.some(l => l.includes("failed to run 'codex'"))).toBe(true);
    });
});

// ---------------------------------------------------------------------------
// formatPlan
// ---------------------------------------------------------------------------
describe("formatPlan", () => {
    test("renders a header and one row per target", () => {
        const targets = [
            { slug: "oo-ably", folder: "f", status: "new", latest: null, version: "1.0.0", action: "publish" as const, error: null, displayName: "Ably" },
            { slug: "oo-slack", folder: "f", status: "update", latest: "1.0.0", version: "1.0.0", action: "skip" as const, error: "x", displayName: "Slack" },
        ];
        const lines = formatPlan(targets, "oomol");
        expect(lines[0]).toBe("Plan (2 candidate skill(s), owner=oomol):");
        expect(lines[1]).toContain("SKILL");
        expect(lines[1]).toContain("DISPLAY NAME");
        expect(lines[2]).toContain("oo-ably");
        expect(lines[2]).toContain("Ably");
        expect(lines[2]).toContain("PUBLISH");
        expect(lines[3]).toContain("SKIP");
    });
    test("shows (auto) when a target has no curated display name", () => {
        const targets = [
            { slug: "oo-x", folder: "f", status: "new", latest: null, version: "1.0.0", action: "publish" as const, error: null },
        ];
        expect(formatPlan(targets, "oomol")[2]).toContain("(auto)");
    });
    test("falls back to placeholder owner", () => {
        expect(formatPlan([], "")[0]).toBe("Plan (0 candidate skill(s), owner=<your account>):");
    });
});

// ---------------------------------------------------------------------------
// run (full orchestration with fakes)
// ---------------------------------------------------------------------------
interface FakeOpts {
    sync: unknown;
    versions?: Record<string, [string | null, string | null]>;
    titles?: Record<string, string | null>;
    existing?: string[];
    publishCode?: (cmd: string[]) => number;
    publishOutput?: (cmd: string[]) => string;
}

function makeDeps(cfg: RunConfig, opts: FakeOpts) {
    const logs: string[] = [];
    const publishCalls: string[][] = [];
    const changelogCalls: Array<{ folder: string; slug: string; version: string }> = [];
    const reports: Array<{ published: number; remaining: number; rateLimited: boolean }> = [];
    const deps: RunDeps = {
        readText: (p) => {
            if (p === cfg.syncJsonPath)
                return JSON.stringify(opts.sync);
            throw new Error(`unexpected read ${p}`);
        },
        exists: p => (opts.existing ?? []).includes(p),
        readVersion: folder => opts.versions?.[folder] ?? [null, "no version stubbed"],
        readTitle: folder => opts.titles?.[folder] ?? null,
        makeChangelog: (folder, slug, version) => {
            changelogCalls.push({ folder, slug, version });
            return "CHANGELOG";
        },
        publish: (cmd) => {
            publishCalls.push(cmd);
            return {
                code: opts.publishCode ? opts.publishCode(cmd) : 0,
                output: opts.publishOutput ? opts.publishOutput(cmd) : "",
            };
        },
        publishConfig: { bin: "clawhub", registry: "https://r", site: "https://s", owner: cfg.owner },
        log: l => logs.push(l),
        report: s => reports.push(s),
    };
    return { deps, logs, publishCalls, changelogCalls, reports };
}

const baseCfg: RunConfig = {
    mode: "publish-catalog",
    skillPath: "",
    owner: "oomol",
    root: "app-skills",
    syncJsonPath: "sync.json",
    repo: "oomol-lab/skills",
    sha: "abcdef1234567",
    publishLimit: 0,
};

describe("run", () => {
    test("no candidates -> exit 0, nothing published", () => {
        const cfg = { ...baseCfg };
        const { deps, publishCalls, logs } = makeDeps(cfg, { sync: { wouldPublish: [] } });
        expect(run(cfg, deps)).toBe(0);
        expect(publishCalls).toHaveLength(0);
        expect(logs.some(l => l.includes("Nothing to publish") || l.includes("No new or changed"))).toBe(true);
    });

    test("dry-run -> exit 0, never publishes or generates changelogs, reports issues", () => {
        const cfg = { ...baseCfg, mode: "dry-run" };
        const { deps, publishCalls, changelogCalls, logs } = makeDeps(cfg, {
            sync: {
                wouldPublish: [
                    { slug: "ok", folder: "app-skills/ok", status: "new", latestVersion: null },
                    { slug: "stale", folder: "app-skills/stale", status: "update", latestVersion: "1.0.0" },
                ],
            },
            versions: { "app-skills/ok": ["1.0.0", null], "app-skills/stale": ["1.0.0", null] },
        });
        expect(run(cfg, deps)).toBe(0);
        expect(publishCalls).toHaveLength(0);
        expect(changelogCalls).toHaveLength(0);
        expect(logs.some(l => l.includes("Dry-run: no skills were published."))).toBe(true);
        expect(logs.some(l => l.includes("would block a real publish"))).toBe(true);
    });

    test("publish-catalog aborts fast when a changed skill is not bumped", () => {
        const cfg = { ...baseCfg };
        const { deps, publishCalls, logs } = makeDeps(cfg, {
            sync: {
                wouldPublish: [
                    { slug: "ok", folder: "app-skills/ok", status: "new", latestVersion: null },
                    { slug: "stale", folder: "app-skills/stale", status: "update", latestVersion: "1.0.0" },
                ],
            },
            versions: { "app-skills/ok": ["1.0.0", null], "app-skills/stale": ["1.0.0", null] },
        });
        expect(run(cfg, deps)).toBe(1);
        expect(publishCalls).toHaveLength(0); // nothing published — atomic
        expect(logs.some(l => l.startsWith("::error::") && l.includes("Aborting publish"))).toBe(true);
    });

    test("publish-catalog happy path publishes every changed skill", () => {
        const cfg = { ...baseCfg };
        const { deps, publishCalls, changelogCalls } = makeDeps(cfg, {
            sync: {
                wouldPublish: [
                    { slug: "oo-ably", folder: "app-skills/oo-ably", status: "new", latestVersion: null },
                    { slug: "oo-notion", folder: "app-skills/oo-notion", status: "update", latestVersion: "1.1.0" },
                ],
            },
            versions: { "app-skills/oo-ably": ["1.0.0", null], "app-skills/oo-notion": ["1.2.0", null] },
            titles: { "app-skills/oo-ably": "Ably", "app-skills/oo-notion": "Notion" },
        });
        expect(run(cfg, deps)).toBe(0);
        expect(changelogCalls).toHaveLength(2);
        expect(publishCalls).toHaveLength(2);
        // built args carry the resolved manifest version, the curated display name, and the changelog
        const ably = publishCalls.find(c => c.includes("app-skills/oo-ably"))!;
        expect(ably[ably.indexOf("--version") + 1]).toBe("1.0.0");
        expect(ably[ably.indexOf("--changelog") + 1]).toBe("CHANGELOG");
        // the slug keeps its oo- prefix, but the published display name is the curated title
        expect(ably[ably.indexOf("publish") + 1]).toBe("app-skills/oo-ably");
        expect(ably[ably.indexOf("--name") + 1]).toBe("Ably");
        const notion = publishCalls.find(c => c.includes("app-skills/oo-notion"))!;
        expect(notion[notion.indexOf("--version") + 1]).toBe("1.2.0");
        expect(notion[notion.indexOf("--name") + 1]).toBe("Notion");
    });

    test("publish without a curated title omits --name and warns", () => {
        const cfg = { ...baseCfg };
        const { deps, publishCalls, logs } = makeDeps(cfg, {
            sync: { wouldPublish: [{ slug: "oo-x", folder: "app-skills/oo-x", status: "new", latestVersion: null }] },
            versions: { "app-skills/oo-x": ["1.0.0", null] },
            // no titles stubbed -> readTitle returns null
        });
        expect(run(cfg, deps)).toBe(0);
        const x = publishCalls[0]!;
        expect(x).not.toContain("--name");
        expect(logs.some(l => l.includes("::warning::oo-x: no metadata.title"))).toBe(true);
    });

    test("publish failure -> exit 1 but other skills still attempted", () => {
        const cfg = { ...baseCfg };
        const { deps, publishCalls, logs } = makeDeps(cfg, {
            sync: {
                wouldPublish: [
                    { slug: "good", folder: "app-skills/good", status: "new", latestVersion: null },
                    { slug: "bad", folder: "app-skills/bad", status: "new", latestVersion: null },
                ],
            },
            versions: { "app-skills/good": ["1.0.0", null], "app-skills/bad": ["1.0.0", null] },
            publishCode: cmd => (cmd.includes("app-skills/bad") ? 7 : 0),
        });
        expect(run(cfg, deps)).toBe(1);
        expect(publishCalls).toHaveLength(2);
        expect(logs.some(l => l.includes("exit 7"))).toBe(true);
        expect(logs.some(l => l.includes("✓ good @ 1.0.0"))).toBe(true);
    });

    test("publish-single not found -> exit 1, no publish", () => {
        const cfg = { ...baseCfg, mode: "publish-single", skillPath: "app-skills/ghost" };
        const { deps, publishCalls, logs } = makeDeps(cfg, { sync: { wouldPublish: [] } });
        expect(run(cfg, deps)).toBe(1);
        expect(publishCalls).toHaveLength(0);
        expect(logs.some(l => l.includes("::error::") && l.includes("was not found"))).toBe(true);
    });

    test("publish-single unchanged -> exit 0", () => {
        const cfg = { ...baseCfg, mode: "publish-single", skillPath: "app-skills/synced" };
        const { deps, publishCalls } = makeDeps(cfg, {
            sync: { wouldPublish: [] },
            existing: ["app-skills/synced/SKILL.md"],
        });
        expect(run(cfg, deps)).toBe(0);
        expect(publishCalls).toHaveLength(0);
    });

    test("surfaces clawhub sync failed/skipped entries as warnings", () => {
        const cfg = { ...baseCfg };
        const { deps, logs } = makeDeps(cfg, {
            sync: {
                wouldPublish: [],
                failed: [{ slug: "boom", message: "server error" }],
                skipped: [{ slug: "dup", reason: "duplicate-slug", detail: "two folders" }],
            },
        });
        run(cfg, deps);
        expect(logs.some(l => l.includes("::warning::clawhub sync flagged boom"))).toBe(true);
        expect(logs.some(l => l.includes("::warning::clawhub sync skipped dup"))).toBe(true);
    });

    // ------------------------------------------------------------------------
    // drip mode (publishLimit > 0): the rate-limit-aware backfill path
    // ------------------------------------------------------------------------
    const dripSync = (slugs: string[]) => ({
        wouldPublish: slugs.map(s => ({ slug: s, folder: `app-skills/${s}`, status: "new", latestVersion: null })),
    });
    const dripVersions = (slugs: string[]): Record<string, [string | null, string | null]> =>
        Object.fromEntries(slugs.map(s => [`app-skills/${s}`, ["1.0.0", null] as [string | null, string | null]]));

    test("reports a done summary when there is nothing to publish at all", () => {
        const cfg = { ...baseCfg, publishLimit: 5 };
        const { deps, reports } = makeDeps(cfg, { sync: { wouldPublish: [] } });
        expect(run(cfg, deps)).toBe(0);
        expect(reports).toEqual([{ published: 0, remaining: 0, rateLimited: false }]);
    });

    test("drip mode publishes at most publishLimit skills (slug-sorted) and defers the rest", () => {
        const cfg = { ...baseCfg, publishLimit: 2 };
        const slugs = ["oo-c", "oo-a", "oo-e", "oo-b", "oo-d"];
        const { deps, publishCalls, reports, logs } = makeDeps(cfg, {
            sync: dripSync(slugs),
            versions: dripVersions(slugs),
        });
        expect(run(cfg, deps)).toBe(0);
        // exactly publishLimit published, and they are the two lowest slugs (deterministic order)
        expect(publishCalls).toHaveLength(2);
        expect(publishCalls[0]).toContain("app-skills/oo-a");
        expect(publishCalls[1]).toContain("app-skills/oo-b");
        expect(reports).toEqual([{ published: 2, remaining: 3, rateLimited: false }]);
        expect(logs.some(l => l.includes("3 skill(s) still pending") && l.includes("per-run cap"))).toBe(true);
    });

    test("drip mode stops cleanly on a ClawHub rate-limit error and defers the rest", () => {
        const cfg = { ...baseCfg, publishLimit: 5 };
        const slugs = ["oo-a", "oo-b", "oo-c", "oo-d"];
        const { deps, publishCalls, reports, logs } = makeDeps(cfg, {
            sync: dripSync(slugs),
            versions: dripVersions(slugs),
            // oo-a, oo-b succeed; oo-c is rejected by the hourly quota; oo-d is never attempted
            publishCode: cmd => (cmd.some(a => a.includes("app-skills/oo-c")) ? 1 : 0),
            publishOutput: cmd => (cmd.some(a => a.includes("app-skills/oo-c")) ? "✖ Rate limit: max 5 new skills per hour." : ""),
        });
        expect(run(cfg, deps)).toBe(0); // soft-stop is success, not failure
        expect(publishCalls).toHaveLength(3); // a, b, c attempted; broke before d
        expect(publishCalls[2]).toContain("app-skills/oo-c");
        expect(reports).toEqual([{ published: 2, remaining: 2, rateLimited: true }]);
        expect(logs.some(l => l.includes("rate limit reached"))).toBe(true);
        expect(logs.some(l => l.includes("2 skill(s) still pending") && l.includes("rate-limited"))).toBe(true);
    });

    test("without a per-run cap a rate-limit error stays a genuine failure (exit 1)", () => {
        // The main (uncapped) workflow must still fail loudly on a rate limit so the operator
        // knows to run the drip workflow — only drip mode treats it as deferrable back-pressure.
        const cfg = { ...baseCfg, publishLimit: 0 };
        const slugs = ["oo-a", "oo-b"];
        const { deps, publishCalls } = makeDeps(cfg, {
            sync: dripSync(slugs),
            versions: dripVersions(slugs),
            publishCode: cmd => (cmd.some(a => a.includes("app-skills/oo-b")) ? 1 : 0),
            publishOutput: () => "Rate limit: max 5 new skills per hour.",
        });
        expect(run(cfg, deps)).toBe(1);
        expect(publishCalls).toHaveLength(2); // legacy mode never short-circuits — every skill attempted
    });
});

// ---------------------------------------------------------------------------
// config readers
// ---------------------------------------------------------------------------
describe("config readers", () => {
    const fakeEnv = (m: Record<string, string>): ((n: string) => string | undefined) => n => m[n];

    test("readRunConfig trims and defaults root, strips trailing slash", () => {
        const cfg = readRunConfig(fakeEnv({ MODE: " publish-catalog ", SKILL_PATH: "app-skills/ably/", SKILLS_ROOT: "app-skills/" }));
        expect(cfg.mode).toBe("publish-catalog");
        expect(cfg.skillPath).toBe("app-skills/ably");
        expect(cfg.root).toBe("app-skills");
    });
    test("readRunConfig falls back to app-skills when SKILLS_ROOT empty", () => {
        expect(readRunConfig(fakeEnv({})).root).toBe("app-skills");
    });
    test("readRunConfig reads PUBLISH_LIMIT, defaulting to 0 (no cap)", () => {
        expect(readRunConfig(fakeEnv({})).publishLimit).toBe(0);
        expect(readRunConfig(fakeEnv({ PUBLISH_LIMIT: "5" })).publishLimit).toBe(5);
        // garbage / negative values fall back to 0 rather than throwing or capping at a bad value
        expect(readRunConfig(fakeEnv({ PUBLISH_LIMIT: "oops" })).publishLimit).toBe(0);
        expect(readRunConfig(fakeEnv({ PUBLISH_LIMIT: "-3" })).publishLimit).toBe(0);
    });
    test("readCodexConfig defaults and api-key presence", () => {
        const cfg = readCodexConfig(fakeEnv({ CODEX_BASE_URL: "https://x/v1", OPENAI_API_KEY: "sk-xxx" }));
        expect(cfg).toMatchObject({ enabled: true, model: "gpt-5.5", effort: "high", provider: "oomol", wireApi: "responses", apiKeyEnv: "OPENAI_API_KEY", apiKeyPresent: true });
    });
    test("readCodexConfig honors disabled flag and missing key", () => {
        const cfg = readCodexConfig(fakeEnv({ CODEX_CHANGELOG_ENABLED: "false" }));
        expect(cfg.enabled).toBe(false);
        expect(cfg.apiKeyPresent).toBe(false);
    });
    test("readCodexConfig respects a custom api key env name", () => {
        const cfg = readCodexConfig(fakeEnv({ CODEX_API_KEY_ENV: "MY_KEY", MY_KEY: "secret" }));
        expect(cfg.apiKeyEnv).toBe("MY_KEY");
        expect(cfg.apiKeyPresent).toBe(true);
    });
    test("readPublishConfig reads bin and registry", () => {
        expect(readPublishConfig(fakeEnv({ CLAWHUB_REGISTRY: "https://r", CLAWHUB_SITE: "https://s", CLAWHUB_OWNER: "oomol" }))).toEqual({
            bin: "clawhub",
            registry: "https://r",
            site: "https://s",
            owner: "oomol",
        });
    });
});
