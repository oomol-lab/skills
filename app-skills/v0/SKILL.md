---
name: v0
description: "v0 (v0.dev). Use this skill for ANY v0 request — reading, creating, updating, and deleting data. Whenever a task involves v0, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "v0"
  author: "OOMOL"
  version: "1.0.0"
  service: "v0"
  categories: "AI, Developer Tools"
  homepage: "https://v0.dev"
  icon: "https://static.oomol.com/logo/third-party/V0.svg"
---

# v0

Operate **v0** through your OOMOL-connected account. This skill calls the `v0` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Developer Tools. Exposes 45 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected v0. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "v0" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "v0" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`assign_project_to_chat`](actions/assign_project_to_chat.md) — Assign an existing v0 chat to a project container.
- [`create_chat`](actions/create_chat.md) — Create a new v0 chat and immediately send the first message.
- [`create_deployment`](actions/create_deployment.md) — Create a deployment for a specific v0 chat version.
- [`create_env_vars`](actions/create_env_vars.md) — Create one or more environment variables on a v0 project.
- [`create_hook`](actions/create_hook.md) — Create a webhook hook in v0 for chat or message events.
- [`create_project`](actions/create_project.md) — Create a new v0 project container for chats, environment variables, and deployments.
- [`create_vercel_project`](actions/create_vercel_project.md) — Create and link a Vercel project from a v0 project.
- [`delete_chat`](actions/delete_chat.md) — Delete a v0 chat by chat ID.
- [`delete_env_vars`](actions/delete_env_vars.md) — Delete one or more environment variables from a v0 project.
- [`delete_hook`](actions/delete_hook.md) — Delete a webhook hook by hook ID.
- [`delete_project`](actions/delete_project.md) — Delete a v0 project by project ID.
- [`favorite_chat`](actions/favorite_chat.md) — Mark or unmark a v0 chat as favorite.
- [`find_chats`](actions/find_chats.md) — List chats in the connected v0 workspace with optional filters.
- [`find_deployment_errors`](actions/find_deployment_errors.md) — Get the current error summary for a v0 deployment.
- [`find_deployment_logs`](actions/find_deployment_logs.md) — List logs for a v0 deployment, optionally continuing from a previous timestamp.
- [`find_deployments`](actions/find_deployments.md) — List deployments for a specific project, chat, and version combination.
- [`find_env_vars`](actions/find_env_vars.md) — List environment variables configured on a v0 project.
- [`find_hooks`](actions/find_hooks.md) — List webhook hooks configured in the connected v0 workspace.
- [`find_messages`](actions/find_messages.md) — List messages for a v0 chat.
- [`find_projects`](actions/find_projects.md) — List v0 projects available to the connected account.
- [`find_rate_limit`](actions/find_rate_limit.md) — Get current v0 rate-limit information for the workspace or a specific scope.
- [`find_vercel_projects`](actions/find_vercel_projects.md) — List Vercel projects linked to the connected v0 workspace.
- [`find_versions`](actions/find_versions.md) — List generated versions for a v0 chat.
- [`fork_chat`](actions/fork_chat.md) — Fork an existing v0 chat into a new chat workspace.
- [`get_billing`](actions/get_billing.md) — Get current v0 billing and quota information.
- [`get_chat`](actions/get_chat.md) — Get a single v0 chat, including the current messages when v0 returns them.
- [`get_deployment`](actions/get_deployment.md) — Get a single deployment by deployment ID.
- [`get_env_var`](actions/get_env_var.md) — Get a single environment variable from a v0 project.
- [`get_hook`](actions/get_hook.md) — Get a single webhook hook by hook ID.
- [`get_message`](actions/get_message.md) — Get a single message from a v0 chat.
- [`get_plan`](actions/get_plan.md) — Get the current subscription plan for the connected v0 user.
- [`get_project`](actions/get_project.md) — Get a single v0 project by project ID.
- [`get_project_by_chat`](actions/get_project_by_chat.md) — Get the v0 project currently linked to a chat.
- [`get_usage_report`](actions/get_usage_report.md) — Get usage events and pagination information from the v0 usage report API.
- [`get_user`](actions/get_user.md) — Get the authenticated v0 user profile for the connected API key.
- [`get_user_scopes`](actions/get_user_scopes.md) — List workspaces and scopes accessible to the connected v0 user.
- [`get_version`](actions/get_version.md) — Get a single v0 chat version, optionally including default deployment files.
- [`init_chat`](actions/init_chat.md) — Initialize a new v0 chat from files, a repository, a registry, a zip archive, or a template.
- [`resume_message`](actions/resume_message.md) — Resume a previously asynchronous v0 message generation.
- [`send_message`](actions/send_message.md) — Send a follow-up message to an existing v0 chat.
- [`update_chat`](actions/update_chat.md) — Update a v0 chat's metadata such as its name or privacy.
- [`update_env_vars`](actions/update_env_vars.md) — Update existing environment variables on a v0 project.
- [`update_hook`](actions/update_hook.md) — Update an existing webhook hook in v0.
- [`update_project`](actions/update_project.md) — Update a v0 project's metadata, instructions, visibility, or linked Vercel project.
- [`update_version`](actions/update_version.md) — Update the files of an existing v0 chat version.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change v0 state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — v0 is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=v0
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- v0 homepage: https://v0.dev
