---
name: oo-keyword
description: "Keyword.com (keyword.com). Use this skill for ANY Keyword.com request — searching and reading data. Whenever a task involves Keyword.com, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Keyword.com"
  author: "OOMOL"
  version: "1.0.0"
  service: "keyword"
  categories: "Marketing, Data & Analytics"
  homepage: "https://keyword.com"
---

# Keyword.com

Operate **Keyword.com** through your OOMOL-connected account. This skill calls the `keyword` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Data & Analytics. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Keyword.com. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "keyword" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "keyword" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_current_user`](actions/get_current_user.md) — Get the current Keyword.com user profile for the API token.
- [`get_keyword`](actions/get_keyword.md) — Get one Keyword.com keyword and its ranking data by project and keyword ID.
- [`get_project`](actions/get_project.md) — Get one Keyword.com project or group by name.
- [`list_keywords`](actions/list_keywords.md) — List Keyword.com keywords and ranking data for a project or group.
- [`list_project_regions`](actions/list_project_regions.md) — List Google regions tracked by a Keyword.com project or group.
- [`list_projects`](actions/list_projects.md) — List active Keyword.com projects and groups visible to the API token.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Keyword.com state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Keyword.com is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=keyword
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Keyword.com homepage: https://keyword.com
