---
name: shortcut
description: "Shortcut (shortcut.com). Use this skill for ANY Shortcut request — reading, creating, and updating data. Whenever a task involves Shortcut, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Shortcut"
  author: "OOMOL"
  version: "1.0.0"
  service: "shortcut"
  categories: "Productivity"
  homepage: "https://www.shortcut.com"
  icon: "https://static.oomol.com/logo/third-party/shortcut.svg"
---

# Shortcut

Operate **Shortcut** through your OOMOL-connected account. This skill calls the `shortcut` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 15 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Shortcut. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "shortcut" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "shortcut" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_epic`](actions/create_epic.md) — Create one Shortcut epic with the first-pass supported fields.
- [`create_story`](actions/create_story.md) — Create one Shortcut story with the first-pass supported fields.
- [`get_epic`](actions/get_epic.md) — Get one Shortcut epic by epic ID.
- [`get_member`](actions/get_member.md) — Get one Shortcut member by member UUID.
- [`get_project`](actions/get_project.md) — Get one Shortcut project by project ID.
- [`get_story`](actions/get_story.md) — Get one Shortcut story by story ID.
- [`get_workflow`](actions/get_workflow.md) — Get one Shortcut workflow by workflow ID.
- [`list_epics`](actions/list_epics.md) — List the epics available in the connected Shortcut workspace.
- [`list_members`](actions/list_members.md) — List the members available in the connected Shortcut workspace.
- [`list_projects`](actions/list_projects.md) — List the projects available in the connected Shortcut workspace.
- [`list_stories`](actions/list_stories.md) — List the stories in one Shortcut project.
- [`list_workflows`](actions/list_workflows.md) — List the workflows available in the connected Shortcut workspace.
- [`search_stories`](actions/search_stories.md) — Search Shortcut stories with the official search endpoint and stable pagination.
- [`update_epic`](actions/update_epic.md) — Update one Shortcut epic with the first-pass supported fields.
- [`update_story`](actions/update_story.md) — Update one Shortcut story with the first-pass supported fields.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Shortcut state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Shortcut is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=shortcut
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Shortcut homepage: https://www.shortcut.com
