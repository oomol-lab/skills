---
name: oo-doppler
description: "Doppler (doppler.com). Use this skill for ANY Doppler request — reading, creating, updating, and deleting data. Whenever a task involves Doppler, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Doppler"
  author: "OOMOL"
  version: "1.0.0"
  service: "doppler"
  categories: "Developer Tools, Security & Identity"
  homepage: "https://www.doppler.com"
  icon: "https://static.oomol.com/logo/third-party/Doppler.svg"
---

# Doppler

Operate **Doppler** through your OOMOL-connected account. This skill calls the `doppler` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Security & Identity. Exposes 44 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Doppler. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "doppler" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "doppler" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`clone_config`](actions/clone_config.md) — Clone a Doppler branch config and its secrets.
- [`create_change_request`](actions/create_change_request.md) — Create a Doppler change request with one or more units.
- [`create_config`](actions/create_config.md) — Create a branch config under a Doppler project and environment.
- [`create_environment`](actions/create_environment.md) — Create an environment under a Doppler project.
- [`create_project`](actions/create_project.md) — Create a Doppler project in the current workplace.
- [`create_service_token`](actions/create_service_token.md) — Create a new service token for a specific project and config.
- [`create_sync`](actions/create_sync.md) — Create a Doppler secrets sync for a project config.
- [`delete_config`](actions/delete_config.md) — Delete a Doppler config.
- [`delete_environment`](actions/delete_environment.md) — Delete an environment from a Doppler project.
- [`delete_project`](actions/delete_project.md) — Delete a Doppler project from the current workplace.
- [`delete_secret`](actions/delete_secret.md) — Delete a single secret for a specific project and config.
- [`delete_service_token`](actions/delete_service_token.md) — Delete a service token for a specific project and config.
- [`delete_sync`](actions/delete_sync.md) — Delete a Doppler secrets sync.
- [`download_secrets`](actions/download_secrets.md) — Export secrets from a Doppler config in a specific format.
- [`get_auth_me`](actions/get_auth_me.md) — Get identity, principal, and workplace summary information for the current Doppler token.
- [`get_change_request`](actions/get_change_request.md) — Get the details of a Doppler change request.
- [`get_config`](actions/get_config.md) — Get the details of a single Doppler config.
- [`get_config_log`](actions/get_config_log.md) — Get the details of a specific config change log entry.
- [`get_environment`](actions/get_environment.md) — Get the details of a single Doppler environment.
- [`get_integration`](actions/get_integration.md) — Get the details of a Doppler integration.
- [`get_project`](actions/get_project.md) — Get the details of a single Doppler project.
- [`get_secret`](actions/get_secret.md) — Get the value and metadata of a single secret for a specific project and config.
- [`get_sync`](actions/get_sync.md) — Get the details of a Doppler secrets sync.
- [`issue_dynamic_secret_lease`](actions/issue_dynamic_secret_lease.md) — Issue a short-lived lease for a Doppler dynamic secret.
- [`list_change_requests`](actions/list_change_requests.md) — List Doppler workplace change requests.
- [`list_config_logs`](actions/list_config_logs.md) — List config change logs for a specific project and config.
- [`list_configs`](actions/list_configs.md) — List configs under a specific Doppler project.
- [`list_environments`](actions/list_environments.md) — List environments under a Doppler project.
- [`list_integrations`](actions/list_integrations.md) — List Doppler integrations available in the workplace.
- [`list_projects`](actions/list_projects.md) — List the projects visible in the current Doppler workspace.
- [`list_secret_names`](actions/list_secret_names.md) — List only the secret names for a Doppler project and config.
- [`list_secrets`](actions/list_secrets.md) — List all secrets and their metadata for a specific project and config.
- [`list_service_tokens`](actions/list_service_tokens.md) — List service tokens for a specific project and config.
- [`review_change_request_unit`](actions/review_change_request_unit.md) — Submit an approving review for one Doppler change request unit.
- [`revoke_dynamic_secret_lease`](actions/revoke_dynamic_secret_lease.md) — Revoke a lease issued for a Doppler dynamic secret.
- [`set_config_inheritable`](actions/set_config_inheritable.md) — Update whether a Doppler config can be inherited by other configs.
- [`update_change_request`](actions/update_change_request.md) — Update a Doppler change request's metadata or units.
- [`update_change_request_assignees`](actions/update_change_request_assignees.md) — Replace the reviewers assigned to a Doppler change request.
- [`update_change_request_unit_status`](actions/update_change_request_unit_status.md) — Update the status of one Doppler change request unit.
- [`update_config`](actions/update_config.md) — Rename a Doppler config.
- [`update_environment`](actions/update_environment.md) — Rename a Doppler environment or update personal config settings.
- [`update_project`](actions/update_project.md) — Update a Doppler project's name or description.
- [`update_secret_note`](actions/update_secret_note.md) — Update the note for a specific secret.
- [`update_secrets`](actions/update_secrets.md) — Create or update secrets in bulk for a specific project and config.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Doppler state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Doppler is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=doppler
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Doppler homepage: https://www.doppler.com
