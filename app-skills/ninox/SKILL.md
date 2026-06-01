---
name: ninox
description: "Ninox (ninox.com). Use this skill for ANY Ninox request — reading, creating, updating, and deleting data. Whenever a task involves Ninox, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Ninox"
  author: "OOMOL"
  version: "1.0.0"
  service: "ninox"
  categories: "Productivity, Data & Analytics"
  homepage: "https://ninox.com"
  icon: "https://static.oomol.com/logo/third-party/ninox.png"
---

# Ninox

Operate **Ninox** through your OOMOL-connected account. This skill calls the `ninox` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Data & Analytics. Exposes 12 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Ninox. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "ninox" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "ninox" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`delete_record`](actions/delete_record.md) — Delete one Ninox record by record ID.
- [`delete_records`](actions/delete_records.md) — Delete multiple Ninox records from the same table.
- [`get_database`](actions/get_database.md) — Get Ninox schema metadata for one database.
- [`get_record`](actions/get_record.md) — Get one Ninox record by record ID.
- [`get_table`](actions/get_table.md) — Get Ninox schema metadata for one table.
- [`get_workspace`](actions/get_workspace.md) — Get one Ninox workspace by workspace ID.
- [`list_databases`](actions/list_databases.md) — List Ninox databases inside one workspace.
- [`list_records`](actions/list_records.md) — List records from one Ninox table.
- [`list_tables`](actions/list_tables.md) — List Ninox tables for one database.
- [`list_workspaces`](actions/list_workspaces.md) — List Ninox workspaces available to the authenticated Personal Access Token.
- [`save_records`](actions/save_records.md) — Create new Ninox records or update existing ones in the same table using the native POST /records endpoint.
- [`search_record`](actions/search_record.md) — Find a single Ninox record by filters in one table.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Ninox state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Ninox is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=ninox
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Ninox homepage: https://ninox.com
