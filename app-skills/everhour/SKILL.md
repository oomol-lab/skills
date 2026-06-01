---
name: everhour
description: "Everhour (everhour.com). Use this skill for ANY Everhour request — reading, creating, and updating data. Whenever a task involves Everhour, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Everhour"
  author: "OOMOL"
  version: "1.0.0"
  service: "everhour"
  categories: "Productivity"
  homepage: "https://everhour.com"
  icon: "https://static.oomol.com/logo/third-party/everhour.png"
---

# Everhour

Operate **Everhour** through your OOMOL-connected account. This skill calls the `everhour` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 12 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Everhour. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "everhour" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "everhour" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_time_record`](actions/create_time_record.md) — Create one Everhour time record with a duration, date, and optional task or user assignment.
- [`get_current_timer`](actions/get_current_timer.md) — Get the current running Everhour timer.
- [`get_current_user`](actions/get_current_user.md) — Get the current Everhour user profile associated with the API key.
- [`get_project`](actions/get_project.md) — Get one Everhour project by its project ID.
- [`get_task`](actions/get_task.md) — Get one Everhour task by its task ID.
- [`list_project_tasks`](actions/list_project_tasks.md) — List the tasks in one Everhour project with optional paging and search filters.
- [`list_projects`](actions/list_projects.md) — List Everhour projects with optional text, platform, and limit filters.
- [`list_time_records`](actions/list_time_records.md) — List Everhour team time records with optional date range and paging filters.
- [`list_users`](actions/list_users.md) — List the users in the Everhour team that the API key can access.
- [`search_tasks`](actions/search_tasks.md) — Search Everhour tasks across accessible projects.
- [`start_timer`](actions/start_timer.md) — Start an Everhour timer for a task with an optional user date and comment.
- [`stop_timer`](actions/stop_timer.md) — Stop the current Everhour timer and return the final timer snapshot.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Everhour state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Everhour is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=everhour
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Everhour homepage: https://everhour.com
