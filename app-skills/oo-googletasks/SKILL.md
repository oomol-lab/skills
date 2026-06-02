---
name: oo-googletasks
description: "Google Tasks (tasks.google.com). Use this skill for ANY Google Tasks request — reading, creating, updating, and deleting data. Whenever a task involves Google Tasks, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Google Tasks"
  author: "OOMOL"
  version: "1.0.0"
  service: "googletasks"
  categories: "Productivity"
  homepage: "https://tasks.google.com"
  icon: "https://static.oomol.com/logo/third-party/Google%20Tasks.svg"
---

# Google Tasks

Operate **Google Tasks** through your OOMOL-connected account. This skill calls the `googletasks` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 16 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Google Tasks. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "googletasks" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "googletasks" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`clear_tasks`](actions/clear_tasks.md) — Clear every completed task from a Google Tasks task list.
- [`create_task_list`](actions/create_task_list.md) — Create a new Google Tasks task list.
- [`delete_task`](actions/delete_task.md) — Delete a Google Tasks task.
- [`delete_task_list`](actions/delete_task_list.md) — Delete a Google Tasks task list.
- [`get_task`](actions/get_task.md) — Fetch a Google Tasks task by task list ID and task ID.
- [`get_task_list`](actions/get_task_list.md) — Fetch a Google Tasks task list by ID.
- [`insert_task`](actions/insert_task.md) — Create a task in a Google Tasks task list.
- [`list_all_tasks`](actions/list_all_tasks.md) — List tasks across every Google Tasks task list visible to the current connection.
- [`list_task_lists`](actions/list_task_lists.md) — List Google Tasks task lists visible to the current connection.
- [`list_tasks`](actions/list_tasks.md) — List tasks from a Google Tasks task list.
- [`move_task`](actions/move_task.md) — Move a Google Tasks task within a list or into another task list.
- [`patch_task`](actions/patch_task.md) — Partially update a Google Tasks task.
- [`patch_task_list`](actions/patch_task_list.md) — Partially update the title of a Google Tasks task list.
- [`update_task`](actions/update_task.md) — Deprecated alias for update_task_full. Fully replace the mutable fields of a Google Tasks task.
- [`update_task_full`](actions/update_task_full.md) — Replace the mutable fields of a Google Tasks task with a full update.
- [`update_task_list`](actions/update_task_list.md) — Replace the mutable fields of a Google Tasks task list.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Google Tasks state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Google Tasks is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=googletasks
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Google Tasks homepage: https://tasks.google.com
