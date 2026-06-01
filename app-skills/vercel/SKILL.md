---
name: vercel
description: "Vercel (vercel.com). Use this skill for ANY Vercel request — reading, creating, updating, and deleting data. Whenever a task involves Vercel, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Vercel"
  author: "OOMOL"
  version: "1.0.0"
  service: "vercel"
  categories: "Developer Tools"
  homepage: "https://vercel.com"
  icon: "https://static.oomol.com/logo/third-party/Vercel.svg"
---

# Vercel

Operate **Vercel** through your OOMOL-connected account. This skill calls the `vercel` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 23 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Vercel. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "vercel" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "vercel" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_project_domain`](actions/add_project_domain.md) — Add a domain to a Vercel project.
- [`create_project`](actions/create_project.md) — Create a Vercel project.
- [`create_project_env`](actions/create_project_env.md) — Create a Vercel project environment variable.
- [`create_webhook`](actions/create_webhook.md) — Create a Vercel webhook.
- [`delete_project_env`](actions/delete_project_env.md) — Delete a Vercel project environment variable.
- [`get_auth_user`](actions/get_auth_user.md) — Get the authenticated Vercel user.
- [`get_deployment`](actions/get_deployment.md) — Get a Vercel deployment.
- [`get_deployment_events`](actions/get_deployment_events.md) — Get Vercel deployment events.
- [`get_domain_config`](actions/get_domain_config.md) — Get domain configuration guidance from Vercel.
- [`get_project`](actions/get_project.md) — Get a Vercel project.
- [`get_project_domain`](actions/get_project_domain.md) — Get a Vercel project domain.
- [`get_runtime_logs`](actions/get_runtime_logs.md) — Get runtime logs for a Vercel deployment.
- [`get_team`](actions/get_team.md) — Get a Vercel team by id or slug.
- [`get_webhook`](actions/get_webhook.md) — Get a Vercel webhook.
- [`list_deployments`](actions/list_deployments.md) — List Vercel deployments.
- [`list_project_domains`](actions/list_project_domains.md) — List domains for a Vercel project.
- [`list_project_envs`](actions/list_project_envs.md) — List environment variables for a Vercel project.
- [`list_projects`](actions/list_projects.md) — List Vercel projects.
- [`list_teams`](actions/list_teams.md) — List Vercel teams available to the authenticated user.
- [`list_webhooks`](actions/list_webhooks.md) — List Vercel webhooks.
- [`update_project`](actions/update_project.md) — Update a Vercel project.
- [`update_project_env`](actions/update_project_env.md) — Update a Vercel project environment variable.
- [`verify_project_domain`](actions/verify_project_domain.md) — Verify a Vercel project domain.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Vercel state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Vercel is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=vercel
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Vercel homepage: https://vercel.com
