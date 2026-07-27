---
name: oo-dokploy
description: "Dokploy (dokploy.com). Use this skill for ANY Dokploy request — reading, creating, updating, and deleting data. Whenever a task involves Dokploy, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Dokploy"
  author: "OOMOL"
  version: "1.0.0"
  services: ["dokploy"]
  icon: "https://static.oomol.com/logo/third-party/dokploy.png"
---

# Dokploy

Operate **Dokploy** through your OOMOL-connected account. This skill calls the `dokploy` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Dokploy. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "dokploy" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "dokploy" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `cancel_application_deployment` — Cancel a Dokploy application deployment. Warning: this operation can interrupt an active deployment. [write]
- `cancel_compose_deployment` — Cancel a Dokploy compose deployment. Warning: this operation can interrupt an active deployment. [write]
- `count_servers` — Count Dokploy servers visible to the API key.
- `create_domain` — Create a Dokploy domain route. [write]
- `create_environment` — Create a Dokploy environment inside a project. [write]
- `delete_deployment_record` — Delete a Dokploy deployment record. Warning: this operation removes deployment history. [destructive]
- `delete_domain` — Delete a Dokploy domain route. Warning: this operation removes the domain routing configuration. [destructive]
- `delete_environment` — Delete a Dokploy environment. Warning: this operation can remove environment resources. [destructive]
- `deploy_application` — Deploy a Dokploy application. [write]
- `deploy_compose` — Deploy a Dokploy compose service. [write]
- `deploy_libsql` — Deploy a Dokploy LibSQL service. [write]
- `deploy_mariadb` — Deploy a Dokploy MariaDB service. [write]
- `deploy_mongo` — Deploy a Dokploy MongoDB service. [write]
- `deploy_mysql` — Deploy a Dokploy MySQL service. [write]
- `deploy_postgres` — Deploy a Dokploy Postgres service. [write]
- `deploy_redis` — Deploy a Dokploy Redis service. [write]
- `duplicate_environment` — Duplicate a Dokploy environment. [write]
- `generate_domain` — Generate a Dokploy domain for an app name.
- `get_application` — Get a Dokploy application by ID.
- `get_bitbucket_provider` — Get a Dokploy Bitbucket provider connection by ID.
- `get_compose` — Get a Dokploy compose service by ID.
- `get_domain` — Get a Dokploy domain by ID.
- `get_environment` — Get a Dokploy environment by ID.
- `get_gitea_provider` — Get a Dokploy Gitea provider connection by ID.
- `get_github_provider` — Get a Dokploy GitHub provider connection by ID.
- `get_gitlab_provider` — Get a Dokploy GitLab provider connection by ID.
- `get_libsql` — Get a Dokploy LibSQL service by ID.
- `get_mariadb` — Get a Dokploy MariaDB service by ID.
- `get_mongo` — Get a Dokploy MongoDB service by ID.
- `get_mysql` — Get a Dokploy MySQL service by ID.
- `get_postgres` — Get a Dokploy Postgres service by ID.
- `get_project` — Get a Dokploy project by ID.
- `get_project_home_stats` — Get Dokploy project home statistics.
- `get_public_ip` — Get the public IP address detected by Dokploy.
- `get_redis` — Get a Dokploy Redis service by ID.
- `get_server` — Get a Dokploy server by ID.
- `get_server_time` — Get the current server time from Dokploy.
- `kill_deployment_process` — Kill a Dokploy deployment process. Warning: this operation can interrupt an active deployment.
- `list_application_deployments` — List deployments for a Dokploy application.
- `list_application_domains` — List Dokploy domains attached to an application.
- `list_bitbucket_branches` — List branches for a repository through a Dokploy Bitbucket provider connection.
- `list_bitbucket_providers` — List Dokploy Bitbucket provider connections.
- `list_bitbucket_repositories` — List repositories available through a Dokploy Bitbucket provider connection.
- `list_centralized_deployments` — List centralized Dokploy deployments.
- `list_compose_deployments` — List deployments for a Dokploy compose service.
- `list_compose_domains` — List Dokploy domains attached to a compose service.
- `list_deployment_queue` — List the Dokploy deployment queue.
- `list_deployments_by_type` — List Dokploy deployments by resource type.
- `list_git_providers` — List Dokploy git provider connections.
- `list_git_providers_for_permissions` — List Dokploy git provider connections as returned by the permissions endpoint.
- `list_gitea_branches` — List branches for a repository through a Dokploy Gitea provider connection.
- `list_gitea_providers` — List Dokploy Gitea provider connections.
- `list_gitea_repositories` — List repositories available through a Dokploy Gitea provider connection.
- `list_github_branches` — List branches for a repository through a Dokploy GitHub provider connection.
- `list_github_providers` — List Dokploy GitHub provider connections.
- `list_github_repositories` — List repositories available through a Dokploy GitHub provider connection.
- `list_gitlab_branches` — List branches for a repository through a Dokploy GitLab provider connection.
- `list_gitlab_providers` — List Dokploy GitLab provider connections.
- `list_gitlab_repositories` — List repositories available through a Dokploy GitLab provider connection.
- `list_project_environments` — List Dokploy environments in a project.
- `list_projects` — List Dokploy projects visible to the API key.
- `list_projects_for_permissions` — List Dokploy projects as returned by the permissions endpoint.
- `list_server_deployments` — List deployments for a Dokploy server.
- `list_servers` — List Dokploy servers visible to the API key.
- `list_servers_for_permissions` — List Dokploy servers as returned by the permissions endpoint.
- `read_application_logs` — Read logs for a Dokploy application.
- `read_compose_logs` — Read logs for a Dokploy compose service container.
- `read_libsql_logs` — Read logs for a Dokploy LibSQL service.
- `read_mariadb_logs` — Read logs for a Dokploy MariaDB service.
- `read_mongo_logs` — Read logs for a Dokploy MongoDB service.
- `read_mysql_logs` — Read logs for a Dokploy MySQL service.
- `read_postgres_logs` — Read logs for a Dokploy Postgres service.
- `read_redis_logs` — Read logs for a Dokploy Redis service.
- `rebuild_libsql` — Rebuild a Dokploy LibSQL service. Warning: this operation can disrupt running services.
- `rebuild_mariadb` — Rebuild a Dokploy MariaDB service. Warning: this operation can disrupt running services.
- `rebuild_mongo` — Rebuild a Dokploy MongoDB service. Warning: this operation can disrupt running services.
- `rebuild_mysql` — Rebuild a Dokploy MySQL service. Warning: this operation can disrupt running services.
- `rebuild_postgres` — Rebuild a Dokploy Postgres service. Warning: this operation can disrupt running services.
- `rebuild_redis` — Rebuild a Dokploy Redis service. Warning: this operation can disrupt running services.
- `redeploy_application` — Redeploy a Dokploy application.
- `redeploy_compose` — Redeploy a Dokploy compose service.
- `reload_libsql` — Reload a Dokploy LibSQL service.
- `reload_mariadb` — Reload a Dokploy MariaDB service.
- `reload_mongo` — Reload a Dokploy MongoDB service.
- `reload_mysql` — Reload a Dokploy MySQL service.
- `reload_postgres` — Reload a Dokploy Postgres service.
- `reload_redis` — Reload a Dokploy Redis service.
- `search_applications` — Search Dokploy applications with optional filters and pagination.
- `search_composes` — Search Dokploy compose services with optional filters and pagination.
- `search_environments` — Search Dokploy environments with optional filters and pagination.
- `search_mariadb` — Search Dokploy MariaDB services with optional filters and pagination.
- `search_mongo` — Search Dokploy MongoDB services with optional filters and pagination.
- `search_mysql` — Search Dokploy MySQL services with optional filters and pagination.
- `search_postgres` — Search Dokploy Postgres services with optional filters and pagination.
- `search_projects` — Search Dokploy projects with optional filters and pagination.
- `search_redis` — Search Dokploy Redis services with optional filters and pagination.
- `start_application` — Start a Dokploy application. [write]
- `start_compose` — Start a Dokploy compose service. [write]
- `start_libsql` — Start a Dokploy LibSQL service. [write]
- `start_mariadb` — Start a Dokploy MariaDB service. [write]
- `start_mongo` — Start a Dokploy MongoDB service. [write]
- `start_mysql` — Start a Dokploy MySQL service. [write]
- `start_postgres` — Start a Dokploy Postgres service. [write]
- `start_redis` — Start a Dokploy Redis service. [write]
- `stop_application` — Stop a Dokploy application. Warning: this operation can disrupt running services. [write]
- `stop_compose` — Stop a Dokploy compose service. Warning: this operation can disrupt running services. [write]
- `stop_libsql` — Stop a Dokploy LibSQL service. Warning: this operation can disrupt running services. [write]
- `stop_mariadb` — Stop a Dokploy MariaDB service. Warning: this operation can disrupt running services. [write]
- `stop_mongo` — Stop a Dokploy MongoDB service. Warning: this operation can disrupt running services. [write]
- `stop_mysql` — Stop a Dokploy MySQL service. Warning: this operation can disrupt running services. [write]
- `stop_postgres` — Stop a Dokploy Postgres service. Warning: this operation can disrupt running services. [write]
- `stop_redis` — Stop a Dokploy Redis service. Warning: this operation can disrupt running services. [write]
- `update_domain` — Update a Dokploy domain route. [write]
- `update_environment` — Update a Dokploy environment. [write]
- `validate_domain` — Validate whether a domain points at a Dokploy server.

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Dokploy state — confirm the exact payload and effect with the user before running.**
- **Actions tagged `[destructive]` remove or overwrite data — always confirm the target and get explicit approval first.**

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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Dokploy is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=dokploy
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Dokploy homepage: https://dokploy.com
