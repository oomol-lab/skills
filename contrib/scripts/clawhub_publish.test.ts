import type { AccountRef, Candidate, ChangelogDeps, CodexConfig, RunConfig, RunDeps, Target, Totals } from "./clawhub_publish.ts";
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
    formatSummaryMarkdown,
    generateChangelog,
    isRateLimitError,
    parseAccounts,
    parseSemver,
    planDistribution,
    readAccounts,
    readCodexConfig,
    readManifestTitle,
    readManifestVersion,
    readPublishConfig,
    readRunConfig,
    roundRobin,
    run,
    selectCandidates,
    semverGt,
    totalsOf,
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
    test("does not carry a token (auth comes from CLAWHUB_CONFIG_PATH, never the args)", () => {
        expect(args.some(a => /token|api[_-]?key/i.test(a))).toBe(false);
    });
    test("omits --name when no display name is given", () => {
        expect(args).not.toContain("--name");
    });
    test("passes a curated display name via --name without disturbing the folder arg", () => {
        const withName = buildPublishArgs(cfg, "/r/app-skills/oo-ably", "1.0.0", "notes", "Ably");
        expect(withName[withName.indexOf("--name") + 1]).toBe("Ably");
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
// parseAccounts (CLAWHUB_TOKENS) — token-handling code; NOTHING may echo a key
// ---------------------------------------------------------------------------
describe("parseAccounts", () => {
    test("parses NAME:KEY,NAME:KEY", () => {
        const [accounts, errors] = parseAccounts("Kevin:abc123,Jack:def456");
        expect(errors).toEqual([]);
        expect(accounts).toEqual([
            { name: "Kevin", key: "abc123" },
            { name: "Jack", key: "def456" },
        ]);
    });
    test("trims whitespace around entries and names", () => {
        const [accounts] = parseAccounts(" Kevin : abc , Jack:def ");
        expect(accounts.map(a => a.name)).toEqual(["Kevin", "Jack"]);
        expect(accounts.map(a => a.key)).toEqual(["abc", "def"]);
    });
    test("splits on the FIRST colon only (keys may contain colons)", () => {
        const [accounts] = parseAccounts("Kevin:sk:live:abc");
        expect(accounts).toEqual([{ name: "Kevin", key: "sk:live:abc" }]);
    });
    test("skips blank entries (trailing/double commas)", () => {
        const [accounts, errors] = parseAccounts("Kevin:abc,,Jack:def,");
        expect(accounts.map(a => a.name)).toEqual(["Kevin", "Jack"]);
        expect(errors).toEqual([]);
    });
    test("disambiguates duplicate names so the table stays unambiguous", () => {
        const [accounts] = parseAccounts("Kevin:abc,Kevin:def,Kevin:ghi");
        expect(accounts.map(a => a.name)).toEqual(["Kevin", "Kevin#2", "Kevin#3"]);
    });
    test("reports malformed entries by POSITION and NEVER echoes the key material", () => {
        const [accounts, errors] = parseAccounts("Kevin:abc,noColonHere,:emptyName,EmptyKey:");
        expect(accounts).toEqual([{ name: "Kevin", key: "abc" }]);
        expect(errors).toHaveLength(3);
        for (const e of errors) {
            expect(e).toMatch(/token entry #\d+ is malformed/);
            // the key/secret-bearing strings must not appear in any error
            expect(e).not.toContain("noColonHere");
            expect(e).not.toContain("emptyName");
            expect(e).not.toContain("EmptyKey");
        }
    });
    test("empty input yields no accounts and no errors", () => {
        expect(parseAccounts("")).toEqual([[], []]);
        expect(parseAccounts("   ")).toEqual([[], []]);
    });
});

// ---------------------------------------------------------------------------
// roundRobin
// ---------------------------------------------------------------------------
describe("roundRobin", () => {
    test("distributes items by index modulo n, preserving order", () => {
        expect(roundRobin(["a", "b", "c", "d", "e"], 2)).toEqual([["a", "c", "e"], ["b", "d"]]);
        expect(roundRobin(["a", "b", "c"], 3)).toEqual([["a"], ["b"], ["c"]]);
    });
    test("n larger than item count leaves trailing buckets empty", () => {
        expect(roundRobin(["a"], 3)).toEqual([["a"], [], []]);
    });
    test("n <= 0 returns no buckets", () => {
        expect(roundRobin(["a", "b"], 0)).toEqual([]);
        expect(roundRobin(["a", "b"], -1)).toEqual([]);
    });
    test("empty items returns n empty buckets", () => {
        expect(roundRobin([], 2)).toEqual([[], []]);
    });
});

// ---------------------------------------------------------------------------
// planDistribution
// ---------------------------------------------------------------------------
describe("planDistribution", () => {
    const acc = (name: string): AccountRef => ({ name, configPath: `/cfg/${name}` });
    const target = (slug: string, status: string): Target => ({
        slug,
        folder: `app-skills/${slug}`,
        status,
        latest: null,
        version: "1.0.0",
        action: "publish",
        error: null,
    });

    test("caps NEW publishes per account and defers the overflow; updates are uncapped", () => {
        const news = ["oo-a", "oo-b", "oo-c", "oo-d", "oo-e"].map(s => target(s, "new"));
        const updates = ["oo-u1", "oo-u2", "oo-u3"].map(s => target(s, "update"));
        const plans = planDistribution(news, updates, [acc("A"), acc("B")], 2);
        // round-robin over sorted new: A=[a,c,e], B=[b,d]; cap 2 -> A attempts [a,c] (e deferred), B attempts [b,d]
        expect(plans[0]!.newTargets.map(t => t.slug)).toEqual(["oo-a", "oo-c"]);
        expect(plans[0]!.deferredNew.map(t => t.slug)).toEqual(["oo-e"]);
        expect(plans[1]!.newTargets.map(t => t.slug)).toEqual(["oo-b", "oo-d"]);
        expect(plans[1]!.deferredNew).toEqual([]);
        // updates round-robin uncapped: A=[u1,u3], B=[u2]
        expect(plans[0]!.updateTargets.map(t => t.slug)).toEqual(["oo-u1", "oo-u3"]);
        expect(plans[1]!.updateTargets.map(t => t.slug)).toEqual(["oo-u2"]);
    });

    test("the new skills attempted this run are the lowest slugs overall (monotonic progress)", () => {
        const news = ["oo-e", "oo-a", "oo-d", "oo-b", "oo-c"].map(s => target(s, "new"));
        const plans = planDistribution(news, [], [acc("A"), acc("B")], 1);
        const attempted = plans.flatMap(p => p.newTargets.map(t => t.slug)).sort();
        expect(attempted).toEqual(["oo-a", "oo-b"]); // 1 per account * 2 accounts = lowest 2 slugs
    });

    test("cap 0 means no cap — every assigned new skill is attempted", () => {
        const news = ["oo-a", "oo-b", "oo-c"].map(s => target(s, "new"));
        const plans = planDistribution(news, [], [acc("A")], 0);
        expect(plans[0]!.newTargets.map(t => t.slug)).toEqual(["oo-a", "oo-b", "oo-c"]);
        expect(plans[0]!.deferredNew).toEqual([]);
    });
});

// ---------------------------------------------------------------------------
// totalsOf + formatSummaryMarkdown
// ---------------------------------------------------------------------------
describe("totalsOf", () => {
    test("sums each column and lists the rate-limited accounts", () => {
        const stats = [
            { name: "Kevin", published: 5, updated: 3, failed: 0, rateLimited: false, remaining: 10 },
            { name: "Jack", published: 4, updated: 1, failed: 2, rateLimited: true, remaining: 7 },
        ];
        expect(totalsOf(stats)).toEqual({ published: 9, updated: 4, failed: 2, remaining: 17, rateLimitedAccounts: ["Jack"] });
    });
    test("empty -> all zero", () => {
        expect(totalsOf([])).toEqual({ published: 0, updated: 0, failed: 0, remaining: 0, rateLimitedAccounts: [] });
    });
});

describe("formatSummaryMarkdown", () => {
    const stats = [
        { name: "Kevin", published: 5, updated: 3, failed: 0, rateLimited: false, remaining: 10 },
        { name: "Jack", published: 5, updated: 2, failed: 1, rateLimited: true, remaining: 12 },
    ];

    test("renders a per-account table, a totals row and a rate-limit note", () => {
        const md = formatSummaryMarkdown(stats, []).join("\n");
        expect(md).toContain("### ClawHub publish results");
        expect(md).toContain("| Account | Published (new) | Updated | Failed | Rate-limited | Remaining |");
        expect(md).toContain("| Kevin | 5 | 3 | 0 | — | 10 |");
        expect(md).toContain("| Jack | 5 | 2 | 1 | ⚠️ yes | 12 |");
        expect(md).toContain("| **Total** | **10** | **5** | **1** |");
        expect(md).toContain("Rate-limited this run: Jack");
        expect(md).toContain("22 skill(s) still pending");
    });

    test("lists blocked skills needing a version bump", () => {
        const md = formatSummaryMarkdown([], [{ slug: "oo-foo", reason: "oo-foo: not greater than published" }]).join("\n");
        expect(md).toContain("#### Blocked (1)");
        expect(md).toContain("`oo-foo`: oo-foo: not greater than published");
    });

    test("uses account NAMES only — a results table can never carry a token", () => {
        const md = formatSummaryMarkdown([{ name: "Kevin", published: 1, updated: 0, failed: 0, rateLimited: false, remaining: 0 }], []).join("\n");
        expect(md).toContain("Kevin");
        expect(md).not.toContain("configPath");
        expect(md).not.toMatch(/token|api[_-]?key/i);
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
    const okSpawn = (): { exitCode: number; stdout: string; stderr: string } => ({ exitCode: 0, stdout: "", stderr: "" });
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
// run (multi-account orchestration with fakes)
// ---------------------------------------------------------------------------
interface FakeOpts {
    sync: unknown;
    versions?: Record<string, [string | null, string | null]>;
    titles?: Record<string, string | null>;
    existing?: string[];
    accounts?: AccountRef[];
    publishCode?: (cmd: string[], account: AccountRef) => number;
    publishOutput?: (cmd: string[], account: AccountRef) => string;
}

function makeDeps(cfg: RunConfig, opts: FakeOpts) {
    const logs: string[] = [];
    const publishCalls: Array<{ cmd: string[]; account: string }> = [];
    const changelogCalls: Array<{ folder: string; slug: string; version: string }> = [];
    const summaries: string[][] = [];
    const reports: Totals[] = [];
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
        publish: (cmd, account) => {
            publishCalls.push({ cmd, account: account.name });
            return {
                code: opts.publishCode ? opts.publishCode(cmd, account) : 0,
                output: opts.publishOutput ? opts.publishOutput(cmd, account) : "",
            };
        },
        publishConfig: { bin: "clawhub", registry: "https://r", site: "https://s", owner: cfg.owner },
        accounts: opts.accounts ?? [{ name: "solo", configPath: "/cfg/solo" }],
        log: l => logs.push(l),
        writeSummary: l => summaries.push(l),
        report: t => reports.push(t),
    };
    return { deps, logs, publishCalls, changelogCalls, summaries, reports };
}

const baseCfg: RunConfig = {
    mode: "publish-catalog",
    skillPath: "",
    owner: "oomol",
    root: "app-skills",
    syncJsonPath: "sync.json",
    repo: "oomol-lab/skills",
    sha: "abcdef1234567",
    maxNewPerAccount: 0,
};

// helpers to build sync candidates and stub their versions
const newCand = (slug: string) => ({ slug, folder: `app-skills/${slug}`, status: "new", latestVersion: null });
const updateCand = (slug: string, latest: string) => ({ slug, folder: `app-skills/${slug}`, status: "update", latestVersion: latest });
function versionsFor(map: Record<string, string>): Record<string, [string | null, string | null]> {
    return Object.fromEntries(Object.entries(map).map(([slug, v]) => [`app-skills/${slug}`, [v, null] as [string | null, string | null]]));
}

describe("run", () => {
    test("no candidates -> exit 0, nothing published, zero totals reported", () => {
        const cfg = { ...baseCfg };
        const { deps, publishCalls, logs, reports } = makeDeps(cfg, { sync: { wouldPublish: [] } });
        expect(run(cfg, deps)).toBe(0);
        expect(publishCalls).toHaveLength(0);
        expect(logs.some(l => l.includes("Nothing to publish"))).toBe(true);
        expect(reports).toEqual([{ published: 0, updated: 0, failed: 0, remaining: 0, rateLimitedAccounts: [] }]);
    });

    test("dry-run -> never publishes, previews distribution, lists blockers", () => {
        const cfg = { ...baseCfg, mode: "dry-run", maxNewPerAccount: 5 };
        const { deps, publishCalls, changelogCalls, logs } = makeDeps(cfg, {
            sync: { wouldPublish: [newCand("ok"), updateCand("stale", "1.0.0")] },
            versions: versionsFor({ ok: "1.0.0", stale: "1.0.0" }),
            accounts: [{ name: "Kevin", configPath: "/k" }, { name: "Jack", configPath: "/j" }],
        });
        expect(run(cfg, deps)).toBe(0);
        expect(publishCalls).toHaveLength(0);
        expect(changelogCalls).toHaveLength(0);
        expect(logs.some(l => l.includes("Distribution preview across 2 account(s)"))).toBe(true);
        expect(logs.some(l => l.includes("Dry-run: no skills were published."))).toBe(true);
        expect(logs.some(l => l.includes("would be blocked"))).toBe(true);
    });

    test("publishes new vs update across accounts and tags each publish with its account", () => {
        const cfg = { ...baseCfg };
        const accounts = [{ name: "Kevin", configPath: "/k" }, { name: "Jack", configPath: "/j" }];
        const { deps, publishCalls, reports } = makeDeps(cfg, {
            // sorted new: oo-a, oo-b, oo-c -> Kevin=[a,c], Jack=[b]; update oo-x -> Kevin
            sync: { wouldPublish: [newCand("oo-a"), newCand("oo-b"), newCand("oo-c"), updateCand("oo-x", "1.0.0")] },
            versions: versionsFor({ "oo-a": "1.0.0", "oo-b": "1.0.0", "oo-c": "1.0.0", "oo-x": "1.1.0" }),
            accounts,
        });
        expect(run(cfg, deps)).toBe(0);
        const kevin = publishCalls.filter(c => c.account === "Kevin").flatMap(c => c.cmd.filter(a => a.startsWith("app-skills/")));
        const jack = publishCalls.filter(c => c.account === "Jack").flatMap(c => c.cmd.filter(a => a.startsWith("app-skills/")));
        expect(kevin.sort()).toEqual(["app-skills/oo-a", "app-skills/oo-c", "app-skills/oo-x"]);
        expect(jack.sort()).toEqual(["app-skills/oo-b"]);
        // 3 new published, 1 updated, nothing left
        expect(reports[0]).toEqual({ published: 3, updated: 1, failed: 0, remaining: 0, rateLimitedAccounts: [] });
    });

    test("caps NEW publishes per account and reports the overflow as remaining", () => {
        const cfg = { ...baseCfg, maxNewPerAccount: 2 };
        const slugs = ["oo-a", "oo-b", "oo-c", "oo-d", "oo-e"];
        const { deps, publishCalls, reports } = makeDeps(cfg, {
            sync: { wouldPublish: slugs.map(newCand) },
            versions: versionsFor(Object.fromEntries(slugs.map(s => [s, "1.0.0"]))),
            accounts: [{ name: "solo", configPath: "/s" }],
        });
        expect(run(cfg, deps)).toBe(0);
        // one account, cap 2 -> publishes the 2 lowest, defers 3
        expect(publishCalls).toHaveLength(2);
        expect(reports[0]).toEqual({ published: 2, updated: 0, failed: 0, remaining: 3, rateLimitedAccounts: [] });
    });

    test("a per-account rate limit soft-stops that account and defers the rest (exit 0)", () => {
        const cfg = { ...baseCfg };
        const slugs = ["oo-a", "oo-b", "oo-c"];
        const { deps, publishCalls, reports, logs } = makeDeps(cfg, {
            sync: { wouldPublish: slugs.map(newCand) },
            versions: versionsFor(Object.fromEntries(slugs.map(s => [s, "1.0.0"]))),
            accounts: [{ name: "solo", configPath: "/s" }],
            // oo-a ok, oo-b hits the quota, oo-c never attempted
            publishCode: cmd => (cmd.some(a => a.includes("app-skills/oo-b")) ? 1 : 0),
            publishOutput: cmd => (cmd.some(a => a.includes("app-skills/oo-b")) ? "✖ Rate limit: max 5 new skills per hour." : ""),
        });
        expect(run(cfg, deps)).toBe(0);
        expect(publishCalls.map(c => c.cmd.find(a => a.startsWith("app-skills/")))).toEqual(["app-skills/oo-a", "app-skills/oo-b"]);
        expect(reports[0]).toEqual({ published: 1, updated: 0, failed: 0, remaining: 2, rateLimitedAccounts: ["solo"] });
        expect(logs.some(l => l.includes("rate limit reached"))).toBe(true);
    });

    test("a genuine publish failure is counted and fails the run (exit 1) but other skills still go", () => {
        const cfg = { ...baseCfg };
        const { deps, publishCalls, reports, logs } = makeDeps(cfg, {
            sync: { wouldPublish: [newCand("oo-good"), newCand("oo-bad")] },
            versions: versionsFor({ "oo-good": "1.0.0", "oo-bad": "1.0.0" }),
            accounts: [{ name: "solo", configPath: "/s" }],
            publishCode: cmd => (cmd.some(a => a.includes("app-skills/oo-bad")) ? 7 : 0),
        });
        expect(run(cfg, deps)).toBe(1);
        expect(publishCalls).toHaveLength(2); // not short-circuited
        expect(reports[0]).toMatchObject({ published: 1, failed: 1, remaining: 1 });
        expect(logs.some(l => l.includes("exited with code 7"))).toBe(true);
    });

    test("blocked skills (version not bumped) are non-fatal: healthy skills still publish", () => {
        const cfg = { ...baseCfg };
        const { deps, publishCalls, reports, summaries } = makeDeps(cfg, {
            sync: { wouldPublish: [newCand("oo-ok"), updateCand("oo-stale", "2.0.0")] },
            versions: versionsFor({ "oo-ok": "1.0.0", "oo-stale": "1.0.0" }), // stale not greater than 2.0.0 -> blocked
            accounts: [{ name: "solo", configPath: "/s" }],
        });
        expect(run(cfg, deps)).toBe(0); // blocked is a warning, not a failure
        expect(publishCalls).toHaveLength(1);
        expect(publishCalls[0]!.cmd).toContain("app-skills/oo-ok");
        expect(reports[0]).toMatchObject({ published: 1, remaining: 0 });
        // the blocked skill shows up in the summary table
        expect(summaries[0]!.join("\n")).toContain("Blocked (1)");
    });

    test("real publish without any accounts -> exit 1", () => {
        const cfg = { ...baseCfg };
        const { deps, publishCalls } = makeDeps(cfg, {
            sync: { wouldPublish: [newCand("oo-a")] },
            versions: versionsFor({ "oo-a": "1.0.0" }),
            accounts: [],
        });
        expect(run(cfg, deps)).toBe(1);
        expect(publishCalls).toHaveLength(0);
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

    test("the run summary written to GITHUB_STEP_SUMMARY carries account names but never a config path/token", () => {
        const cfg = { ...baseCfg };
        const { deps, summaries } = makeDeps(cfg, {
            sync: { wouldPublish: [newCand("oo-a")] },
            versions: versionsFor({ "oo-a": "1.0.0" }),
            accounts: [{ name: "Kevin", configPath: "/secret/path/k.json" }],
        });
        run(cfg, deps);
        const md = summaries[0]!.join("\n");
        expect(md).toContain("Kevin");
        expect(md).not.toContain("/secret/path/k.json");
    });

    test("accounts fail heterogeneously in one run: one genuine failure + one rate-limit are tallied independently", () => {
        const cfg = { ...baseCfg };
        // sorted new: oo-a..oo-d -> round-robin over [Kevin, Jack]: Kevin=[oo-a, oo-c], Jack=[oo-b, oo-d]
        const slugs = ["oo-a", "oo-b", "oo-c", "oo-d"];
        const { deps, reports, summaries } = makeDeps(cfg, {
            sync: { wouldPublish: slugs.map(newCand) },
            versions: versionsFor(Object.fromEntries(slugs.map(s => [s, "1.0.0"]))),
            accounts: [{ name: "Kevin", configPath: "/k" }, { name: "Jack", configPath: "/j" }],
            // Kevin: oo-a ok, oo-c genuine-fails (code 7). Jack: oo-b ok, oo-d rate-limits.
            publishCode: cmd => (cmd.some(a => a.includes("app-skills/oo-c")) ? 7 : cmd.some(a => a.includes("app-skills/oo-d")) ? 1 : 0),
            publishOutput: cmd => (cmd.some(a => a.includes("app-skills/oo-d")) ? "✖ Rate limit: max 5 new skills per hour." : ""),
        });
        // a genuine failure (Kevin) fails the whole run; Jack's rate limit is soft.
        expect(run(cfg, deps)).toBe(1);
        // totals aggregate both accounts; only Jack is rate-limited.
        expect(reports[0]).toEqual({ published: 2, updated: 0, failed: 1, remaining: 2, rateLimitedAccounts: ["Jack"] });
        // per-account rows in the results table are independent
        const md = summaries[0]!.join("\n");
        expect(md).toContain("| Kevin | 1 | 0 | 1 | — | 1 |");
        expect(md).toContain("| Jack | 1 | 0 | 0 | ⚠️ yes | 1 |");
    });

    test("updates-only re-run: every update publishes (uncapped), round-robin across accounts, nothing remaining", () => {
        const cfg = { ...baseCfg, maxNewPerAccount: 5 };
        const accounts = [{ name: "Alice", configPath: "/a" }, { name: "Bob", configPath: "/b" }, { name: "Carol", configPath: "/c" }];
        const slugs = ["oo-v", "oo-w", "oo-x", "oo-y", "oo-z"];
        const { deps, publishCalls, reports } = makeDeps(cfg, {
            sync: { wouldPublish: slugs.map(s => updateCand(s, "1.0.0")) },
            versions: versionsFor(Object.fromEntries(slugs.map(s => [s, "2.0.0"]))), // all bumped -> publishable updates
            accounts,
        });
        expect(run(cfg, deps)).toBe(0);
        // updates are never capped, so all 5 publish
        expect(publishCalls).toHaveLength(5);
        // round-robin over sorted [oo-v,oo-w,oo-x,oo-y,oo-z] across 3 accounts:
        //   Alice=[oo-v,oo-y]  Bob=[oo-w,oo-z]  Carol=[oo-x]
        const folders = (name: string) => publishCalls.filter(c => c.account === name).flatMap(c => c.cmd.filter(a => a.startsWith("app-skills/"))).sort();
        expect(folders("Alice")).toEqual(["app-skills/oo-v", "app-skills/oo-y"]);
        expect(folders("Bob")).toEqual(["app-skills/oo-w", "app-skills/oo-z"]);
        expect(folders("Carol")).toEqual(["app-skills/oo-x"]);
        // 0 new, 5 updated, nothing deferred or pending
        expect(reports[0]).toEqual({ published: 0, updated: 5, failed: 0, remaining: 0, rateLimitedAccounts: [] });
    });

    test("genuine failure then rate-limit within one account: failed counted, then loop breaks, exit 1", () => {
        const cfg = { ...baseCfg };
        const slugs = ["oo-a", "oo-b", "oo-c"];
        const { deps, publishCalls, reports, logs } = makeDeps(cfg, {
            sync: { wouldPublish: slugs.map(newCand) },
            versions: versionsFor(Object.fromEntries(slugs.map(s => [s, "1.0.0"]))),
            accounts: [{ name: "solo", configPath: "/s" }],
            // oo-a ok, oo-b genuine-fails (continue), oo-c rate-limits (break)
            publishCode: cmd => (cmd.some(a => a.includes("app-skills/oo-b")) ? 42 : cmd.some(a => a.includes("app-skills/oo-c")) ? 1 : 0),
            publishOutput: cmd => (cmd.some(a => a.includes("app-skills/oo-c")) ? "✖ Rate limit: max 5 new skills per hour." : ""),
        });
        expect(run(cfg, deps)).toBe(1); // a genuine failure takes precedence over the soft rate-limit stop
        expect(publishCalls.map(c => c.cmd.find(a => a.startsWith("app-skills/")))).toEqual(["app-skills/oo-a", "app-skills/oo-b", "app-skills/oo-c"]);
        // remaining = assigned(3) - published(1) - updated(0) = 2 (the failed oo-b + the rate-limited oo-c)
        expect(reports[0]).toEqual({ published: 1, updated: 0, failed: 1, remaining: 2, rateLimitedAccounts: ["solo"] });
        expect(logs.some(l => l.includes("exited with code 42"))).toBe(true);
        expect(logs.some(l => l.includes("rate limit reached"))).toBe(true);
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
    test("readRunConfig reads MAX_NEW_PER_ACCOUNT: default 5, garbage -> 5, negative -> 0 (no cap), explicit 0 -> 0", () => {
        expect(readRunConfig(fakeEnv({})).maxNewPerAccount).toBe(5);
        expect(readRunConfig(fakeEnv({ MAX_NEW_PER_ACCOUNT: "3" })).maxNewPerAccount).toBe(3);
        expect(readRunConfig(fakeEnv({ MAX_NEW_PER_ACCOUNT: "oops" })).maxNewPerAccount).toBe(5);
        expect(readRunConfig(fakeEnv({ MAX_NEW_PER_ACCOUNT: "-3" })).maxNewPerAccount).toBe(0);
        expect(readRunConfig(fakeEnv({ MAX_NEW_PER_ACCOUNT: "0" })).maxNewPerAccount).toBe(0);
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

// ---------------------------------------------------------------------------
// readAccounts (token-free manifest, with CLAWHUB_CONFIG_PATH fallback)
// ---------------------------------------------------------------------------
describe("readAccounts", () => {
    const fakeEnv = (m: Record<string, string>): ((n: string) => string | undefined) => n => m[n];
    const noLog = () => {};

    test("reads the {name, configPath} manifest", () => {
        const manifest = JSON.stringify([{ name: "Kevin", configPath: "/k.json" }, { name: "Jack", configPath: "/j.json" }]);
        const refs = readAccounts(
            fakeEnv({ CLAWHUB_ACCOUNTS_MANIFEST: "/m.json" }),
            p => (p === "/m.json" ? manifest : ""),
            p => p === "/m.json",
            noLog,
        );
        expect(refs).toEqual([{ name: "Kevin", configPath: "/k.json" }, { name: "Jack", configPath: "/j.json" }]);
    });

    test("falls back to a single default account from CLAWHUB_CONFIG_PATH", () => {
        const refs = readAccounts(
            fakeEnv({ CLAWHUB_CONFIG_PATH: "/single.json" }),
            () => "",
            () => false,
            noLog,
        );
        expect(refs).toEqual([{ name: "default", configPath: "/single.json" }]);
    });

    test("ignores malformed manifest entries and falls back when none remain", () => {
        const refs = readAccounts(
            fakeEnv({ CLAWHUB_ACCOUNTS_MANIFEST: "/m.json", CLAWHUB_CONFIG_PATH: "/single.json" }),
            () => JSON.stringify([{ nope: 1 }]),
            () => true,
            noLog,
        );
        expect(refs).toEqual([{ name: "default", configPath: "/single.json" }]);
    });

    test("returns [] when nothing is configured", () => {
        expect(readAccounts(fakeEnv({}), () => "", () => false, noLog)).toEqual([]);
    });
});
