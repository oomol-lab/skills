---
name: oo-emailable
description: "Emailable (emailable.com). Use this skill for ANY Emailable request — searching and reading data. Whenever a task involves Emailable, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Emailable"
  author: "OOMOL"
  version: "1.0.0"
  service: "emailable"
  categories: "Communication, Developer Tools"
  homepage: "https://emailable.com/"
  icon: "https://static.oomol.com/logo/third-party/Emailable.svg"
---

# Emailable

Operate **Emailable** through your OOMOL-connected account. This skill calls the `emailable` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Developer Tools. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Emailable. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "emailable" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "emailable" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_account_info`](actions/get_account_info.md) — Retrieve Emailable account information including owner email and available credits.
- [`get_batch_status`](actions/get_batch_status.md) — Retrieve the latest Emailable status and results for an existing batch verification job.
- [`verify_batch_emails`](actions/verify_batch_emails.md) — Create an Emailable batch verification job for a list of email addresses.
- [`verify_email`](actions/verify_email.md) — Verify a single email address and return Emailable deliverability signals.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Emailable state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Emailable is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=emailable
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Emailable homepage: https://emailable.com/
