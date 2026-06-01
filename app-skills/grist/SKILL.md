---
name: grist
description: "Grist (getgrist.com). Use this skill for ANY Grist request — reading, creating, updating, and deleting data. Whenever a task involves Grist, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Grist"
  author: "OOMOL"
  version: "1.0.0"
  service: "grist"
  categories: "Productivity, Data & Analytics"
  homepage: "https://www.getgrist.com"
  icon: "https://static.oomol.com/logo/third-party/grist.png"
---

# Grist

Operate **Grist** through your OOMOL-connected account. This skill calls the `grist` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Data & Analytics. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Grist. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "grist" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "grist" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_records`](actions/add_records.md) — Add one or more records to a Grist table.
- [`delete_records`](actions/delete_records.md) — Delete one or more records from a Grist table by row ID.
- [`get_document`](actions/get_document.md) — Fetch metadata for a Grist document by document ID or short URL alias.
- [`list_columns`](actions/list_columns.md) — List the columns defined in a Grist table.
- [`list_records`](actions/list_records.md) — List records from a Grist table with optional filtering, sorting, limits, and hidden-column inclusion.
- [`list_tables`](actions/list_tables.md) — List the tables defined in a Grist document.
- [`list_workspaces`](actions/list_workspaces.md) — List the Grist workspaces and documents that the authenticated API key can access on the current Grist site.
- [`update_records`](actions/update_records.md) — Update one or more existing Grist records by row ID.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Grist state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Grist is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=grist
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Grist homepage: https://www.getgrist.com
