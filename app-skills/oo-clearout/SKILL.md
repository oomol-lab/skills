---
name: oo-clearout
description: "Clearout (clearout.io). Use this skill for ANY Clearout request — searching and reading data. Whenever a task involves Clearout, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Clearout"
  author: "OOMOL"
  version: "1.0.0"
  service: "clearout"
  categories: "Marketing, Data & Analytics"
  homepage: "https://clearout.io"
  icon: "https://static.oomol.com/logo/third-party/Clearout.svg"
---

# Clearout

Operate **Clearout** through your OOMOL-connected account. This skill calls the `clearout` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Data & Analytics. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Clearout. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "clearout" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "clearout" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_available_credits`](actions/get_available_credits.md) — Get the current Clearout credit balance and daily verification limits.
- [`instant_verify_email`](actions/instant_verify_email.md) — Verify an email address in real time and return the full Clearout verification result.
- [`verify_business_account_email`](actions/verify_business_account_email.md) — Check whether an email address belongs to a business account.
- [`verify_catch_all_email`](actions/verify_catch_all_email.md) — Check whether an email address belongs to a catch-all domain.
- [`verify_disposable_email`](actions/verify_disposable_email.md) — Check whether an email address belongs to a disposable email service.
- [`verify_free_account_email`](actions/verify_free_account_email.md) — Check whether an email address belongs to a free email provider.
- [`verify_gibberish_email`](actions/verify_gibberish_email.md) — Check whether an email address looks like a gibberish account.
- [`verify_role_account_email`](actions/verify_role_account_email.md) — Check whether an email address is a role-based account.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Clearout state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Clearout is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=clearout
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Clearout homepage: https://clearout.io
