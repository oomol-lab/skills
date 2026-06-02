---
name: oo-pingdom
description: "Pingdom (pingdom.com). Use this skill for ANY Pingdom request — searching and reading data. Whenever a task involves Pingdom, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Pingdom"
  author: "OOMOL"
  version: "1.0.0"
  service: "pingdom"
  categories: "Developer Tools"
  homepage: "https://www.pingdom.com"
  icon: "https://static.oomol.com/logo/third-party/Pingdom.svg"
---

# Pingdom

Operate **Pingdom** through your OOMOL-connected account. This skill calls the `pingdom` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Pingdom. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "pingdom" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "pingdom" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_check`](actions/get_check.md) — Retrieve a detailed Pingdom uptime check by ID.
- [`get_credits`](actions/get_credits.md) — Retrieve Pingdom account check and SMS credit information.
- [`list_checks`](actions/list_checks.md) — List Pingdom uptime checks with optional pagination and tag filters.
- [`list_probes`](actions/list_probes.md) — List Pingdom probe servers and their location details.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Pingdom state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Pingdom is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=pingdom
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Pingdom homepage: https://www.pingdom.com
