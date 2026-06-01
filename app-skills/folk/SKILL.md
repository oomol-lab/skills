---
name: folk
description: "folk (folk.app). Use this skill for ANY folk request — reading, creating, updating, and deleting data. Whenever a task involves folk, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "folk"
  author: "OOMOL"
  version: "1.0.0"
  service: "folk"
  categories: "Productivity, Communication"
  homepage: "https://folk.app"
  icon: "https://static.oomol.com/logo/third-party/folk.svg"
---

# folk

Operate **folk** through your OOMOL-connected account. This skill calls the `folk` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Communication. Exposes 15 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected folk. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "folk" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "folk" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_company`](actions/create_company.md) — Create one Folk company using the official companies payload fields.
- [`create_person`](actions/create_person.md) — Create one Folk person using the official people payload fields.
- [`delete_company`](actions/delete_company.md) — Delete one Folk company by company ID.
- [`delete_person`](actions/delete_person.md) — Delete one Folk person by person ID.
- [`get_company`](actions/get_company.md) — Get one Folk company by company ID.
- [`get_current_user`](actions/get_current_user.md) — Get the current Folk workspace user associated with the API key.
- [`get_person`](actions/get_person.md) — Get one Folk person by person ID.
- [`get_user`](actions/get_user.md) — Get one Folk workspace user by user ID.
- [`list_companies`](actions/list_companies.md) — List Folk companies with official cursor pagination and the documented nested filter syntax.
- [`list_group_custom_fields`](actions/list_group_custom_fields.md) — List Folk custom fields for one group and entity type.
- [`list_groups`](actions/list_groups.md) — List Folk workspace groups with cursor pagination.
- [`list_people`](actions/list_people.md) — List Folk people with official cursor pagination and the documented nested filter syntax.
- [`list_users`](actions/list_users.md) — List workspace users from Folk with cursor pagination.
- [`update_company`](actions/update_company.md) — Update one Folk company by company ID using the official companies payload fields.
- [`update_person`](actions/update_person.md) — Update one Folk person by person ID using the official people payload fields.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change folk state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — folk is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=folk
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- folk homepage: https://folk.app
