---
name: neverbounce
description: "NeverBounce (neverbounce.com). Use this skill for ANY NeverBounce request — reading, creating, and updating data. Whenever a task involves NeverBounce, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "NeverBounce"
  author: "OOMOL"
  version: "1.0.0"
  service: "neverbounce"
  categories: "Communication, Marketing"
  homepage: "https://neverbounce.com"
  icon: "https://static.oomol.com/logo/third-party/NeverBounce.svg"
---

# NeverBounce

Operate **NeverBounce** through your OOMOL-connected account. This skill calls the `neverbounce` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Marketing. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected NeverBounce. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "neverbounce" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "neverbounce" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_job`](actions/create_job.md) — Create a NeverBounce bulk verification job from a remote file or supplied rows.
- [`download_job_results`](actions/download_job_results.md) — Download a NeverBounce bulk job as CSV with optional result filters and extra columns.
- [`get_account_info`](actions/get_account_info.md) — Get the current NeverBounce account credit summary and bulk job counters.
- [`get_job_results`](actions/get_job_results.md) — Retrieve paginated NeverBounce verification results for a completed bulk job.
- [`get_job_status`](actions/get_job_status.md) — Retrieve the current processing status and aggregate counts for a NeverBounce job.
- [`parse_job`](actions/parse_job.md) — Parse a NeverBounce bulk job created without auto_parse enabled.
- [`single_check`](actions/single_check.md) — Verify a single email address with NeverBounce and return the verification result.
- [`start_job`](actions/start_job.md) — Start a parsed NeverBounce bulk job.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change NeverBounce state — confirm the exact payload and effect with the user before running.**
- **Delete or remove actions are destructive — always confirm the target and get explicit approval first.**

## First-time setup

These are **one-time** steps — do not repeat them on every call. Run a step only when a command fails for the matching reason.

- **`oo: command not found`** — install the oo CLI (other platforms: <https://cli.oomol.com/install-guide.md>):

  ```bash
  curl -fsSL https://cli.oomol.com/install.sh | bash    # macOS / Linux
  ```

  ```powershell
  irm https://cli.oomol.com/install.ps1 | iex           # Windows PowerShell
  ```

- **Not signed in / authentication error** — sign in to your OOMOL account once:

  ```bash
  oo auth login
  ```

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — NeverBounce is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=neverbounce
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- NeverBounce homepage: https://neverbounce.com
