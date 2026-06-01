---
name: celigo
description: "Celigo (celigo.com). Use this skill for ANY Celigo request — reading, creating, and updating data. Whenever a task involves Celigo, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Celigo"
  author: "OOMOL"
  version: "1.0.0"
  service: "celigo"
  categories: "Developer Tools"
  homepage: "https://www.celigo.com"
  icon: "https://static.oomol.com/logo/third-party/Celigo.svg"
---

# Celigo

Operate **Celigo** through your OOMOL-connected account. This skill calls the `celigo` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Celigo. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "celigo" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "celigo" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_connection`](actions/get_connection.md) — Get one Celigo connection by connection ID.
- [`get_export`](actions/get_export.md) — Get one Celigo export by export ID.
- [`get_flow`](actions/get_flow.md) — Get one Celigo flow by flow ID.
- [`get_import`](actions/get_import.md) — Get one Celigo import by import ID.
- [`get_token_info`](actions/get_token_info.md) — Get metadata for the current Celigo API token.
- [`list_exports`](actions/list_exports.md) — List exports available in the current Celigo account.
- [`list_flows`](actions/list_flows.md) — List flows available in the current Celigo account.
- [`list_imports`](actions/list_imports.md) — List imports available in the current Celigo account.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Celigo state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Celigo is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=celigo
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Celigo homepage: https://www.celigo.com
