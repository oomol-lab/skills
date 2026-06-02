---
name: oo-convex
description: "Convex (convex.dev). Use this skill for ANY Convex request — reading, creating, updating, and deleting data. Whenever a task involves Convex, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Convex"
  author: "OOMOL"
  version: "1.0.0"
  service: "convex"
  categories: "Developer Tools"
  homepage: "https://www.convex.dev"
  icon: "https://static.oomol.com/logo/third-party/Convex.svg"
---

# Convex

Operate **Convex** through your OOMOL-connected account. This skill calls the `convex` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 23 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Convex. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "convex" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "convex" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_deploy_key`](actions/create_deploy_key.md) — Create a deploy key for a Convex deployment.
- [`create_deployment`](actions/create_deployment.md) — Create a new deployment in a Convex project.
- [`create_project`](actions/create_project.md) — Create a Convex project on a team, optionally provisioning an initial dev or prod deployment.
- [`delete_custom_domain`](actions/delete_custom_domain.md) — Remove a custom domain from a Convex deployment.
- [`delete_deploy_key`](actions/delete_deploy_key.md) — Delete a deploy key for a Convex deployment.
- [`delete_deployment`](actions/delete_deployment.md) — Delete a Convex deployment and all of its data.
- [`delete_project`](actions/delete_project.md) — Delete a Convex project and all of its deployments.
- [`execute_query_batch`](actions/execute_query_batch.md) — Execute multiple Convex queries against a deployment and return results in the same order.
- [`get_deployment`](actions/get_deployment.md) — Get a cloud deployment by deployment name.
- [`get_project_by_id`](actions/get_project_by_id.md) — Get a Convex project by numeric project ID.
- [`get_project_by_slug`](actions/get_project_by_slug.md) — Get a Convex project by team identifier or slug plus project slug.
- [`get_token_details`](actions/get_token_details.md) — Return the current Convex token details so you can discover the authorized team or project context.
- [`list_custom_domains`](actions/list_custom_domains.md) — List custom domains configured for a Convex deployment.
- [`list_deploy_keys`](actions/list_deploy_keys.md) — List deploy keys for a Convex deployment.
- [`list_deployment_classes`](actions/list_deployment_classes.md) — List available deployment classes for a Convex team.
- [`list_deployment_regions`](actions/list_deployment_regions.md) — List available deployment regions for a Convex team.
- [`list_deployments`](actions/list_deployments.md) — List deployments for a Convex project.
- [`list_projects`](actions/list_projects.md) — List all Convex projects for a team.
- [`run_action`](actions/run_action.md) — Execute a Convex action through the deployment HTTP API.
- [`run_function`](actions/run_function.md) — Execute an arbitrary Convex function through `/api/run/{functionIdentifier}` using a slash-separated identifier.
- [`run_mutation`](actions/run_mutation.md) — Execute a Convex mutation through the deployment HTTP API.
- [`run_query`](actions/run_query.md) — Execute a Convex query through the deployment HTTP API.
- [`update_deployment`](actions/update_deployment.md) — Update mutable Convex deployment properties.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Convex state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Convex is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2, API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=convex
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Convex homepage: https://www.convex.dev
