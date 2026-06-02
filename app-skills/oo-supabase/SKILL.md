---
name: oo-supabase
description: "Supabase (supabase.com). Use this skill for ANY Supabase request — reading, creating, and updating data. Whenever a task involves Supabase, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Supabase"
  author: "OOMOL"
  version: "1.0.0"
  service: "supabase"
  categories: "Developer Tools, Data & Analytics, Storage"
  homepage: "https://supabase.com"
  icon: "https://static.oomol.com/logo/third-party/Supabase.svg"
---

# Supabase

Operate **Supabase** through your OOMOL-connected account. This skill calls the `supabase` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Data & Analytics, Storage. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Supabase. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "supabase" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "supabase" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_project_api_key`](actions/create_project_api_key.md) — Create a publishable or secret API key for a Supabase project.
- [`get_project`](actions/get_project.md) — Get detailed metadata for a Supabase project by project ref.
- [`get_project_api_key`](actions/get_project_api_key.md) — Get one API key record from a Supabase project.
- [`list_organizations`](actions/list_organizations.md) — List the organizations available to the authenticated Supabase account.
- [`list_project_api_keys`](actions/list_project_api_keys.md) — List API keys for a Supabase project.
- [`list_projects`](actions/list_projects.md) — List Supabase projects visible to the authenticated account.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Supabase state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Supabase is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2, API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=supabase
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Supabase homepage: https://supabase.com
