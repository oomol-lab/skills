---
name: toggl
description: "Toggl Track (toggl.com). Use this skill for ANY Toggl Track request — reading, creating, updating, and deleting data. Whenever a task involves Toggl Track, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Toggl Track"
  author: "OOMOL"
  version: "1.0.0"
  service: "toggl"
  categories: "Productivity"
  homepage: "https://toggl.com/track/"
  icon: "https://static.oomol.com/logo/third-party/Toggl.svg"
---

# Toggl Track

Operate **Toggl Track** through your OOMOL-connected account. This skill calls the `toggl` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 24 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Toggl Track. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "toggl" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "toggl" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_project`](actions/create_project.md) — Create a new Toggl Track project in a workspace.
- [`create_tag`](actions/create_tag.md) — Create a new Toggl Track tag in a workspace.
- [`create_task`](actions/create_task.md) — Create a new Toggl Track task inside a project.
- [`create_time_entry`](actions/create_time_entry.md) — Create a new Toggl Track time entry in a workspace.
- [`delete_project`](actions/delete_project.md) — Delete a Toggl Track project by ID.
- [`delete_tag`](actions/delete_tag.md) — Delete a Toggl Track tag by ID.
- [`delete_task`](actions/delete_task.md) — Delete a Toggl Track task by ID.
- [`delete_time_entry`](actions/delete_time_entry.md) — Delete a Toggl Track time entry by ID.
- [`get_current_time_entry`](actions/get_current_time_entry.md) — Get the current running Toggl Track time entry, if one exists.
- [`get_current_user`](actions/get_current_user.md) — Get the currently authenticated Toggl Track user.
- [`get_project`](actions/get_project.md) — Get a single Toggl Track project by ID.
- [`get_task`](actions/get_task.md) — Get a single Toggl Track task by ID.
- [`get_time_entry`](actions/get_time_entry.md) — Get a single Toggl Track time entry by ID.
- [`get_workspace`](actions/get_workspace.md) — Get a single Toggl Track workspace by ID.
- [`list_projects`](actions/list_projects.md) — List Toggl Track projects in a workspace.
- [`list_tags`](actions/list_tags.md) — List Toggl Track tags in a workspace.
- [`list_tasks`](actions/list_tasks.md) — List Toggl Track tasks for a project.
- [`list_time_entries`](actions/list_time_entries.md) — List Toggl Track time entries for the authenticated user.
- [`list_workspaces`](actions/list_workspaces.md) — List the Toggl Track workspaces available to the authenticated user.
- [`stop_time_entry`](actions/stop_time_entry.md) — Stop a running Toggl Track time entry.
- [`update_project`](actions/update_project.md) — Update an existing Toggl Track project.
- [`update_tag`](actions/update_tag.md) — Update an existing Toggl Track tag.
- [`update_task`](actions/update_task.md) — Update an existing Toggl Track task.
- [`update_time_entry`](actions/update_time_entry.md) — Update an existing Toggl Track time entry.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Toggl Track state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Toggl Track is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=toggl
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Toggl Track homepage: https://toggl.com/track/
