---
name: oo-nocodb
description: "NocoDB (nocodb.com). Use this skill for ANY NocoDB request — reading, creating, updating, and deleting data. Whenever a task involves NocoDB, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "NocoDB"
  author: "OOMOL"
  version: "1.0.0"
  service: "nocodb"
  categories: "Data & Analytics, Productivity"
  homepage: "https://nocodb.com"
---

# NocoDB

Operate **NocoDB** through your OOMOL-connected account. This skill calls the `nocodb` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Productivity. Exposes 24 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected NocoDB. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "nocodb" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "nocodb" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`count_records`](actions/count_records.md) — Count records in one NocoDB table, optionally filtered by a where expression.
- [`count_table_records`](actions/count_table_records.md) — Count records in one NocoDB table using the v3 data API.
- [`create_records`](actions/create_records.md) — Create one or more records in a NocoDB table.
- [`create_table`](actions/create_table.md) — Create a table in a NocoDB base using the v3 metadata API.
- [`create_table_field`](actions/create_table_field.md) — Create a field in a NocoDB table using the v3 metadata API.
- [`create_table_records`](actions/create_table_records.md) — Create one or more records in a NocoDB table using the v3 data API.
- [`create_table_view`](actions/create_table_view.md) — Create a view for a NocoDB table using the v3 metadata API.
- [`delete_records`](actions/delete_records.md) — Delete one or more records from a NocoDB table.
- [`delete_table`](actions/delete_table.md) — Delete a NocoDB table using the v3 metadata API.
- [`delete_table_records`](actions/delete_table_records.md) — Delete one or more records from a NocoDB table using the v3 data API.
- [`get_base_schema`](actions/get_base_schema.md) — Get schema metadata for one NocoDB base.
- [`get_current_user`](actions/get_current_user.md) — Get the NocoDB user associated with the connected API token.
- [`get_table_metadata`](actions/get_table_metadata.md) — Get metadata for one NocoDB table, including columns and views when available.
- [`list_bases`](actions/list_bases.md) — List bases visible to the connected NocoDB API token.
- [`list_records`](actions/list_records.md) — List records from one NocoDB table with optional where, sort, field, limit, and offset query parameters.
- [`list_table_records`](actions/list_table_records.md) — List records from one NocoDB table using the v3 data API with optional field, sort, filter, page, and view parameters.
- [`list_table_views`](actions/list_table_views.md) — List views for a NocoDB table using the v3 metadata API.
- [`list_tables`](actions/list_tables.md) — List tables in a NocoDB base or in a specific base source.
- [`read_record`](actions/read_record.md) — Read one record from a NocoDB table by record ID.
- [`read_table_record`](actions/read_table_record.md) — Read one record from a NocoDB table using the v3 data API.
- [`update_records`](actions/update_records.md) — Update one or more records in a NocoDB table.
- [`update_table`](actions/update_table.md) — Update a NocoDB table title, description, display field, or metadata using the v3 metadata API.
- [`update_table_records`](actions/update_table_records.md) — Update one or more records in a NocoDB table using the v3 data API.
- [`upsert_table_records`](actions/upsert_table_records.md) — Create or update records in a NocoDB table by matching up to three fields using the v3 data API.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change NocoDB state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — NocoDB is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=nocodb
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- NocoDB homepage: https://nocodb.com
