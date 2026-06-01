---
name: capsule-crm
description: "Capsule CRM (capsulecrm.com). Use this skill for ANY Capsule CRM request — reading, creating, updating, and deleting data. Whenever a task involves Capsule CRM, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Capsule CRM"
  author: "OOMOL"
  version: "1.0.0"
  service: "capsule_crm"
  categories: "Productivity, Marketing"
  homepage: "https://capsulecrm.com"
  icon: "https://static.oomol.com/logo/third-party/capsule_crm.svg"
---

# Capsule CRM

Operate **Capsule CRM** through your OOMOL-connected account. This skill calls the `capsule_crm` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Marketing. Exposes 25 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Capsule CRM. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "capsule_crm" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "capsule_crm" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_opportunity`](actions/create_opportunity.md) — Create a Capsule CRM opportunity.
- [`create_party`](actions/create_party.md) — Create a Capsule CRM party.
- [`create_task`](actions/create_task.md) — Create a Capsule CRM task.
- [`delete_opportunity`](actions/delete_opportunity.md) — Delete a Capsule CRM opportunity.
- [`delete_party`](actions/delete_party.md) — Delete a Capsule CRM party.
- [`delete_task`](actions/delete_task.md) — Delete a Capsule CRM task.
- [`get_current_user`](actions/get_current_user.md) — Read the Capsule CRM user associated with the access token.
- [`get_opportunity`](actions/get_opportunity.md) — Read one Capsule CRM opportunity by ID.
- [`get_party`](actions/get_party.md) — Read one Capsule CRM party by ID.
- [`get_task`](actions/get_task.md) — Read one Capsule CRM task by ID.
- [`list_categories`](actions/list_categories.md) — List Capsule CRM task categories.
- [`list_countries`](actions/list_countries.md) — List countries supported by Capsule CRM.
- [`list_currencies`](actions/list_currencies.md) — List currencies supported by Capsule CRM.
- [`list_opportunities`](actions/list_opportunities.md) — List Capsule CRM opportunities with pagination, optional change filtering, and embeds.
- [`list_parties`](actions/list_parties.md) — List Capsule CRM parties with pagination, optional change filtering, and embeds.
- [`list_pipeline_milestones`](actions/list_pipeline_milestones.md) — List milestones for a Capsule CRM pipeline.
- [`list_pipelines`](actions/list_pipelines.md) — List Capsule CRM sales pipelines.
- [`list_stages`](actions/list_stages.md) — List stages for a Capsule CRM board.
- [`list_tasks`](actions/list_tasks.md) — List Capsule CRM tasks with pagination, status filtering, and embeds.
- [`list_users`](actions/list_users.md) — List Capsule CRM users.
- [`search_opportunities`](actions/search_opportunities.md) — Search Capsule CRM opportunities by query text.
- [`search_parties`](actions/search_parties.md) — Search Capsule CRM parties by query text.
- [`update_opportunity`](actions/update_opportunity.md) — Update a Capsule CRM opportunity.
- [`update_party`](actions/update_party.md) — Update a Capsule CRM party.
- [`update_task`](actions/update_task.md) — Update a Capsule CRM task.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Capsule CRM state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Capsule CRM is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=capsule_crm
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Capsule CRM homepage: https://capsulecrm.com
