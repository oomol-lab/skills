---
name: oo-todoist
description: "Todoist (todoist.com). Use this skill for ANY Todoist request — reading, creating, and updating data. Whenever a task involves Todoist, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Todoist"
  author: "OOMOL"
  version: "1.0.0"
  service: "todoist"
  categories: "Productivity"
  homepage: "https://www.todoist.com"
  icon: "https://static.oomol.com/logo/third-party/Todoist.svg"
---

# Todoist

Operate **Todoist** through your OOMOL-connected account. This skill calls the `todoist` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 19 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Todoist. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "todoist" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "todoist" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`close_task`](actions/close_task.md) — Mark a Todoist task complete. Recurring tasks advance to their next occurrence.
- [`create_comment`](actions/create_comment.md) — Create a Todoist comment on exactly one task or project.
- [`create_project`](actions/create_project.md) — Create a Todoist project with optional description, color, parent, view style, and workspace placement.
- [`create_section`](actions/create_section.md) — Create a Todoist section inside a project.
- [`create_task`](actions/create_task.md) — Create a Todoist task with optional project, section, parent, labels, assignment, due date, deadline, and duration fields.
- [`get_comment`](actions/get_comment.md) — Get a Todoist comment by comment ID.
- [`get_current_user`](actions/get_current_user.md) — Retrieve the current Todoist user profile and plan metadata.
- [`get_project`](actions/get_project.md) — Get a Todoist project by project ID.
- [`get_section`](actions/get_section.md) — Get a Todoist section by section ID.
- [`get_task`](actions/get_task.md) — Get a Todoist task by task ID.
- [`list_comments`](actions/list_comments.md) — List Todoist comments for exactly one task or project.
- [`list_labels`](actions/list_labels.md) — List Todoist labels with cursor pagination.
- [`list_projects`](actions/list_projects.md) — List active Todoist projects with optional folder, workspace, and cursor filters.
- [`list_sections`](actions/list_sections.md) — List active Todoist sections with optional project and cursor filters.
- [`list_tasks`](actions/list_tasks.md) — List active Todoist tasks with optional project, section, parent, label, goal, ID, and cursor filters.
- [`update_comment`](actions/update_comment.md) — Update a Todoist comment by comment ID.
- [`update_project`](actions/update_project.md) — Update a Todoist project by project ID.
- [`update_section`](actions/update_section.md) — Update a Todoist section by section ID.
- [`update_task`](actions/update_task.md) — Update a Todoist task by task ID.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Todoist state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Todoist is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2, API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=todoist
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Todoist homepage: https://www.todoist.com
