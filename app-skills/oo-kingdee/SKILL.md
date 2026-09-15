---
name: oo-kingdee
description: "Kingdee (kingdee.com). Use this skill for ANY Kingdee request — reading, creating, updating, and deleting data. Whenever a task involves Kingdee, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Kingdee"
  author: "OOMOL"
  version: "1.0.0"
  services: ["kingdee"]
  icon: "https://static.oomol.com/logo/third-party/kingdee.svg"
---

# Kingdee

Operate **Kingdee** through your OOMOL-connected account. This skill calls the `kingdee` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Kingdee. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "kingdee" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "kingdee" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `allocate_records` — Allocate master data to target organizations.
- `audit_records` — Approve records through the audit operation.
- `batch_save_records` — Save multiple records, including updates, and preserve partial results. [write]
- `delete_records` — Delete records by internal IDs or numbers. [destructive]
- `draft_record` — Save a draft, including changes to an existing draft.
- `get_record` — View a record by its internal ID or number.
- `push_records` — Convert source records or entries into target records using a conversion rule.
- `query_records` — Query business records by fields, filters and row offset.
- `query_report` — Query a report using its form-specific filters.
- `save_record` — Save a record, including updates to existing records. [write]
- `submit_records` — Submit records for approval. [write]
- `unaudit_records` — Reverse the audit status of records.

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Kingdee state — confirm the exact payload and effect with the user before running.**
- **Actions tagged `[destructive]` remove or overwrite data — always confirm the target and get explicit approval first.**

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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Kingdee is not connected, or the connection expired or lacks a scope. Connect once (auth type: custom credential) at:

  ```text
  https://console.oomol.com/app-connections?provider=kingdee
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Kingdee homepage: https://www.kingdee.com/cn
