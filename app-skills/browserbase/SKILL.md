---
name: browserbase
description: "Browserbase (browserbase.com). Use this skill for ANY Browserbase request — reading, creating, updating, and deleting data. Whenever a task involves Browserbase, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Browserbase"
  author: "OOMOL"
  version: "1.0.0"
  service: "browserbase"
  categories: "Developer Tools"
  homepage: "https://www.browserbase.com"
  icon: "https://static.oomol.com/logo/third-party/Browserbase.svg"
---

# Browserbase

Operate **Browserbase** through your OOMOL-connected account. This skill calls the `browserbase` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 11 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Browserbase. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "browserbase" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "browserbase" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_context`](actions/create_context.md) — Create a Browserbase context and return the upload credentials for an encrypted user-data directory.
- [`create_session`](actions/create_session.md) — Create a Browserbase session using the connected project by default, with optional context reuse and persistence.
- [`delete_context`](actions/delete_context.md) — Delete one Browserbase context by context identifier.
- [`get_context`](actions/get_context.md) — Get one Browserbase context by context identifier.
- [`get_project`](actions/get_project.md) — Get one Browserbase project by project identifier.
- [`get_project_usage`](actions/get_project_usage.md) — Get Browserbase browser minute and proxy byte usage for one project, defaulting to the connected project.
- [`get_session`](actions/get_session.md) — Get one Browserbase session by session identifier.
- [`list_projects`](actions/list_projects.md) — List the Browserbase projects visible to the current API key.
- [`list_sessions`](actions/list_sessions.md) — List Browserbase sessions with optional status or metadata query filters.
- [`refresh_context_upload_credentials`](actions/refresh_context_upload_credentials.md) — Refresh the Browserbase upload credentials for an existing context so a new encrypted archive can be uploaded.
- [`request_session_release`](actions/request_session_release.md) — Request that Browserbase releases a session before timeout by sending status REQUEST_RELEASE.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Browserbase state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Browserbase is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=browserbase
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Browserbase homepage: https://www.browserbase.com
