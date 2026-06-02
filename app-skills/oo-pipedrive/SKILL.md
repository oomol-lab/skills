---
name: oo-pipedrive
description: "Pipedrive (pipedrive.com). Use this skill for ANY Pipedrive request — reading, creating, updating, and deleting data. Whenever a task involves Pipedrive, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Pipedrive"
  author: "OOMOL"
  version: "1.0.0"
  service: "pipedrive"
  categories: "Productivity, Marketing"
  homepage: "https://www.pipedrive.com"
  icon: "https://static.oomol.com/logo/third-party/Pipedrive.svg"
---

# Pipedrive

Operate **Pipedrive** through your OOMOL-connected account. This skill calls the `pipedrive` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Marketing. Exposes 27 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Pipedrive. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "pipedrive" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "pipedrive" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_activity`](actions/create_activity.md) — Create a Pipedrive activity with subject, due date, linked records, participants, attendees, and notes.
- [`create_deal`](actions/create_deal.md) — Create a Pipedrive deal with title, contact links, pipeline placement, labels, and optional custom fields.
- [`create_organization`](actions/create_organization.md) — Create a Pipedrive organization with optional labels, address, and custom fields.
- [`create_person`](actions/create_person.md) — Create a Pipedrive person with emails, phones, labels, and optional custom fields.
- [`delete_activity`](actions/delete_activity.md) — Delete one Pipedrive activity by activity ID.
- [`delete_deal`](actions/delete_deal.md) — Delete one Pipedrive deal by deal ID.
- [`delete_organization`](actions/delete_organization.md) — Delete one Pipedrive organization by organization ID.
- [`delete_person`](actions/delete_person.md) — Delete one Pipedrive person by person ID.
- [`get_activity`](actions/get_activity.md) — Get one Pipedrive activity by activity ID.
- [`get_deal`](actions/get_deal.md) — Get one Pipedrive deal by deal ID.
- [`get_organization`](actions/get_organization.md) — Get one Pipedrive organization by organization ID.
- [`get_person`](actions/get_person.md) — Get one Pipedrive person by person ID.
- [`get_pipeline`](actions/get_pipeline.md) — Get one Pipedrive pipeline by pipeline ID.
- [`get_stage`](actions/get_stage.md) — Get one Pipedrive stage by stage ID.
- [`list_activities`](actions/list_activities.md) — List Pipedrive activities with optional owner, contact, deal, completion, and pagination filters.
- [`list_deals`](actions/list_deals.md) — List Pipedrive deals with optional owner, contact, pipeline, stage, status, and pagination filters.
- [`list_organizations`](actions/list_organizations.md) — List Pipedrive organizations with optional owner, custom field, and pagination filters.
- [`list_persons`](actions/list_persons.md) — List Pipedrive persons with optional owner, organization, deal, custom field, and pagination filters.
- [`list_pipelines`](actions/list_pipelines.md) — List Pipedrive pipelines with optional sorting and pagination.
- [`list_stages`](actions/list_stages.md) — List Pipedrive stages with optional pipeline, sorting, and pagination filters.
- [`search_deals`](actions/search_deals.md) — Search Pipedrive deals by title, notes, or custom fields.
- [`search_organizations`](actions/search_organizations.md) — Search Pipedrive organizations by name, address, notes, or custom fields.
- [`search_persons`](actions/search_persons.md) — Search Pipedrive persons by name, email, phone, notes, or custom fields.
- [`update_activity`](actions/update_activity.md) — Update one Pipedrive activity by activity ID.
- [`update_deal`](actions/update_deal.md) — Update one Pipedrive deal by deal ID.
- [`update_organization`](actions/update_organization.md) — Update one Pipedrive organization by organization ID.
- [`update_person`](actions/update_person.md) — Update one Pipedrive person by person ID.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Pipedrive state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Pipedrive is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=pipedrive
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Pipedrive homepage: https://www.pipedrive.com
