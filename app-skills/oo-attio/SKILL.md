---
name: oo-attio
description: "Attio (attio.com). Use this skill for ANY Attio request — reading, creating, updating, and deleting data. Whenever a task involves Attio, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Attio"
  author: "OOMOL"
  version: "1.0.0"
  service: "attio"
  categories: "Productivity, Data & Analytics"
  homepage: "https://attio.com"
---

# Attio

Operate **Attio** through your OOMOL-connected account. This skill calls the `attio` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Data & Analytics. Exposes 10 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Attio. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "attio" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "attio" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_record`](actions/create_record.md) — Create a record for an Attio object using documented attribute value shapes.
- [`delete_record`](actions/delete_record.md) — Delete a single Attio record by object and record ID.
- [`get_object`](actions/get_object.md) — Get one Attio object by object ID or API slug.
- [`get_record`](actions/get_record.md) — Get a single Attio record by object and record ID.
- [`identify`](actions/identify.md) — Identify the current Attio access token, its workspace, and the scopes attached to it.
- [`list_attributes`](actions/list_attributes.md) — List attributes defined on an Attio object or list.
- [`list_objects`](actions/list_objects.md) — List all system-defined and user-defined objects in an Attio workspace.
- [`list_records`](actions/list_records.md) — List Attio records for an object with optional filtering, view filtering, sorting, limit, and offset.
- [`update_record`](actions/update_record.md) — Update an Attio record by appending or overwriting multiselect values according to Attio's PATCH and PUT semantics.
- [`upsert_record`](actions/upsert_record.md) — Create or update an Attio record for an object using a unique matching attribute.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Attio state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Attio is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=attio
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Attio homepage: https://attio.com
