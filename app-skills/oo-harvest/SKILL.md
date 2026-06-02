---
name: oo-harvest
description: "Harvest (getharvest.com). Use this skill for ANY Harvest request — reading, creating, updating, and deleting data. Whenever a task involves Harvest, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Harvest"
  author: "OOMOL"
  version: "1.0.0"
  service: "harvest"
  categories: "Productivity"
  homepage: "https://www.getharvest.com"
  icon: "https://static.oomol.com/logo/third-party/Harvest.svg"
---

# Harvest

Operate **Harvest** through your OOMOL-connected account. This skill calls the `harvest` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 15 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Harvest. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "harvest" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "harvest" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_time_entry`](actions/create_time_entry.md) — Create a new Harvest time entry.
- [`delete_time_entry`](actions/delete_time_entry.md) — Delete a Harvest time entry by ID.
- [`get_client`](actions/get_client.md) — Get a single Harvest client by ID.
- [`get_current_user`](actions/get_current_user.md) — Get the current authenticated Harvest user.
- [`get_project`](actions/get_project.md) — Get a single Harvest project by ID.
- [`get_task`](actions/get_task.md) — Get a single Harvest task by ID.
- [`get_time_entry`](actions/get_time_entry.md) — Get a single Harvest time entry by ID.
- [`list_clients`](actions/list_clients.md) — List clients available in the connected Harvest account.
- [`list_project_task_assignments`](actions/list_project_task_assignments.md) — List task assignments for a specific Harvest project.
- [`list_projects`](actions/list_projects.md) — List projects available in the connected Harvest account.
- [`list_tasks`](actions/list_tasks.md) — List tasks available in the connected Harvest account.
- [`list_time_entries`](actions/list_time_entries.md) — List Harvest time entries with optional resource and date filters.
- [`restart_time_entry`](actions/restart_time_entry.md) — Restart a stopped Harvest time entry.
- [`stop_time_entry`](actions/stop_time_entry.md) — Stop a running Harvest time entry.
- [`update_time_entry`](actions/update_time_entry.md) — Update an existing Harvest time entry.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Harvest state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Harvest is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2, API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=harvest
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Harvest homepage: https://www.getharvest.com
