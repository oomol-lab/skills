---
name: oo-haveibeenpwned
description: "Have I Been Pwned (haveibeenpwned.com). Use this skill for ANY Have I Been Pwned request — searching and reading data. Whenever a task involves Have I Been Pwned, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Have I Been Pwned"
  author: "OOMOL"
  version: "1.0.0"
  service: "haveibeenpwned"
  categories: "Security & Identity, Data & Analytics"
  homepage: "https://haveibeenpwned.com/"
  icon: "https://static.oomol.com/logo/third-party/haveibeenpwned.svg"
---

# Have I Been Pwned

Operate **Have I Been Pwned** through your OOMOL-connected account. This skill calls the `haveibeenpwned` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Security & Identity, Data & Analytics. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Have I Been Pwned. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "haveibeenpwned" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "haveibeenpwned" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_breach`](actions/get_breach.md) — Get one breach by its stable HIBP Name value.
- [`get_latest_breach`](actions/get_latest_breach.md) — Get the most recently added breach in Have I Been Pwned.
- [`get_subscription_status`](actions/get_subscription_status.md) — Get the current subscription details for the connected HIBP API key.
- [`list_breaches`](actions/list_breaches.md) — List breaches in Have I Been Pwned and optionally filter by domain or spam-list flag.
- [`list_data_classes`](actions/list_data_classes.md) — List all data classes currently used by breaches in Have I Been Pwned.
- [`list_pastes_for_account`](actions/list_pastes_for_account.md) — List paste exposures for an email address from Have I Been Pwned.
- [`search_breached_account`](actions/search_breached_account.md) — Search full HIBP breach models for an email address, with optional domain and unverified-breach filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Have I Been Pwned state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Have I Been Pwned is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=haveibeenpwned
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Have I Been Pwned homepage: https://haveibeenpwned.com/
