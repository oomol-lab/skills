/**
 * Configure ClawHub auth for the publish workflow from the CLAWHUB_TOKENS secret.
 *
 * CLAWHUB_TOKENS = "NAME:API_KEY,NAME:API_KEY" lets us publish under several accounts at once to
 * get around ClawHub's per-key new-skill rate limit (5/hour, 20/24h). This is the ONLY place that
 * touches raw tokens: it parses them, writes one clawhub config file per account
 * (`{registry, token}`), and emits a token-free manifest of {name, configPath} that the publish
 * step (clawhub_publish.ts) consumes. The publish step selects a token by config path alone, so no
 * key ever reaches a command line, a log, or its memory.
 *
 * Outputs (written to $GITHUB_ENV so later steps see them):
 *   CLAWHUB_CONFIG_PATH        first account's config — used by the read-only `clawhub sync` diff.
 *   CLAWHUB_ACCOUNTS_MANIFEST  path to the JSON manifest [{name, configPath}, ...] (NO tokens).
 *
 * SECURITY:
 *   - Every parsed key is registered with `::add-mask::` so GitHub redacts it everywhere, even if
 *     some downstream tool were to echo it. The mask command's payload is consumed by the runner,
 *     not printed.
 *   - The config files live under $RUNNER_TEMP (ephemeral, not in the workspace) with 0600 perms.
 *   - Nothing here logs a key, a key length, or a config file's contents — only account NAMES and
 *     counts, and parse errors by position ("#2"), never by content.
 *
 * Run with: `bun clawhub_auth.ts`. Token parsing itself is unit-tested via parseAccounts in
 * clawhub_publish.test.ts.
 */
import { appendFileSync, chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";
import { parseAccounts } from "./clawhub_publish.ts";

function fail(message: string): never {
    console.log(`::error::${message}`);
    process.exit(1);
}

if (import.meta.main) {
    const raw = process.env.CLAWHUB_TOKENS ?? "";
    if (!raw.trim())
        fail("Missing secret CLAWHUB_TOKENS (format: NAME:API_KEY,NAME:API_KEY).");

    const [accounts, errors] = parseAccounts(raw);
    for (const e of errors) console.log(`::warning::CLAWHUB_TOKENS: ${e}`);
    if (accounts.length === 0)
        fail("CLAWHUB_TOKENS held no valid NAME:API_KEY entries.");

    // Redact every key from all subsequent logs before anything else can touch them.
    for (const a of accounts) console.log(`::add-mask::${a.key}`);

    const registry = (process.env.CLAWHUB_REGISTRY ?? "").trim();
    if (!registry)
        fail("Missing CLAWHUB_REGISTRY.");

    const tmp = process.env.RUNNER_TEMP || process.env.TMPDIR || "/tmp";
    const authDir = join(tmp, "clawhub-auth");
    mkdirSync(authDir, { recursive: true });

    // One config file per account; the manifest carries only names + paths (never tokens).
    const manifest: Array<{ name: string; configPath: string }> = [];
    accounts.forEach((account, i) => {
        const configPath = join(authDir, `config-${i}.json`);
        writeFileSync(configPath, JSON.stringify({ registry, token: account.key }));
        try {
            chmodSync(configPath, 0o600);
        }
        catch {
            // best-effort hardening; RUNNER_TEMP is already private to the job.
        }
        manifest.push({ name: account.name, configPath });
    });

    const manifestPath = join(authDir, "accounts.json");
    writeFileSync(manifestPath, JSON.stringify(manifest));

    const githubEnv = process.env.GITHUB_ENV;
    if (githubEnv) {
        appendFileSync(
            githubEnv,
            `CLAWHUB_CONFIG_PATH=${manifest[0]!.configPath}\nCLAWHUB_ACCOUNTS_MANIFEST=${manifestPath}\n`,
        );
    }

    console.log(`Configured ${accounts.length} ClawHub account(s): ${accounts.map(a => a.name).join(", ")}.`);
}
