---
name: bouncer
description: "Bouncer (usebouncer.com). Use this skill for ANY Bouncer request — reading, creating, updating, and deleting data. Whenever a task involves Bouncer, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Bouncer"
  author: "OOMOL"
  version: "1.0.0"
  service: "bouncer"
  categories: "Communication, Marketing"
  homepage: "https://www.usebouncer.com/"
  icon: "https://static.oomol.com/logo/third-party/Bouncer.svg"
---

# Bouncer

Operate **Bouncer** through your OOMOL-connected account. This skill calls the `bouncer` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Marketing. Exposes 13 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Bouncer. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "bouncer" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "bouncer" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_batch_request`](actions/create_batch_request.md) — Create an async Bouncer batch verification request for multiple email addresses.
- [`create_toxicity_list_job`](actions/create_toxicity_list_job.md) — Create a Bouncer toxicity list job for multiple email addresses.
- [`delete_batch_request`](actions/delete_batch_request.md) — Delete a Bouncer batch verification request and its stored results.
- [`delete_toxicity_list_job`](actions/delete_toxicity_list_job.md) — Delete a Bouncer toxicity list job and its stored results.
- [`finish_batch`](actions/finish_batch.md) — Request early completion for a Bouncer batch verification request.
- [`get_batch_results`](actions/get_batch_results.md) — Download normalized results from a completed Bouncer batch verification request.
- [`get_batch_status`](actions/get_batch_status.md) — Get the current processing status of a Bouncer batch verification request.
- [`get_credits`](actions/get_credits.md) — Get the current Bouncer credit balance.
- [`get_toxicity_list_job_status`](actions/get_toxicity_list_job_status.md) — Get the current processing status of a Bouncer toxicity list job.
- [`get_toxicity_list_results`](actions/get_toxicity_list_results.md) — Download normalized results from a completed Bouncer toxicity list job.
- [`verify_domain`](actions/verify_domain.md) — Verify one domain with Bouncer and inspect its DNS and catch-all signals.
- [`verify_email`](actions/verify_email.md) — Verify a single email address with Bouncer in real time.
- [`verify_emails_batch_sync`](actions/verify_emails_batch_sync.md) — Verify multiple email addresses with Bouncer batch sync in a single request.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Bouncer state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Bouncer is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=bouncer
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Bouncer homepage: https://www.usebouncer.com/
