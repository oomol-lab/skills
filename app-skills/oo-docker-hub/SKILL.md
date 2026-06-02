---
name: oo-docker-hub
description: "Docker Hub (hub.docker.com). Use this skill for ANY Docker Hub request — reading, creating, updating, and deleting data. Whenever a task involves Docker Hub, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Docker Hub"
  author: "OOMOL"
  version: "1.0.0"
  service: "docker_hub"
  categories: "Developer Tools"
  homepage: "https://hub.docker.com"
  icon: "https://static.oomol.com/logo/third-party/Docker%20Hub.svg"
---

# Docker Hub

Operate **Docker Hub** through your OOMOL-connected account. This skill calls the `docker_hub` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 14 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Docker Hub. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "docker_hub" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "docker_hub" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_org_member`](actions/add_org_member.md) — Invite a Docker ID or email address to join a Docker Hub organization by using the documented bulk invite endpoint with a single invitee.
- [`create_repository`](actions/create_repository.md) — Create a Docker Hub repository inside a namespace.
- [`delete_team`](actions/delete_team.md) — Delete a Docker Hub team within an organization.
- [`get_image`](actions/get_image.md) — Find a Docker Hub image variant by digest by scanning the repository's published tags. This is a repo-level helper built on the official tag listing responses.
- [`get_repository`](actions/get_repository.md) — Get detailed metadata for a Docker Hub repository within a namespace.
- [`get_tag`](actions/get_tag.md) — Get metadata and image variants for a specific Docker Hub repository tag.
- [`get_team`](actions/get_team.md) — Get a Docker Hub team within an organization.
- [`list_org_access_tokens`](actions/list_org_access_tokens.md) — List Docker Hub organization access tokens for an organization.
- [`list_org_members`](actions/list_org_members.md) — List Docker Hub organization members with optional filtering and pagination.
- [`list_repositories`](actions/list_repositories.md) — List Docker Hub repositories in a namespace with optional name filtering and ordering.
- [`list_team_members`](actions/list_team_members.md) — List members of a Docker Hub team within an organization.
- [`list_teams`](actions/list_teams.md) — List Docker Hub teams for an organization.
- [`remove_org_member`](actions/remove_org_member.md) — Remove a member from a Docker Hub organization.
- [`remove_team_member`](actions/remove_team_member.md) — Remove a user from a Docker Hub team within an organization.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Docker Hub state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Docker Hub is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=docker_hub
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Docker Hub homepage: https://hub.docker.com
