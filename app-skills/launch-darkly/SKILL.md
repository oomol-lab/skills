---
name: launch-darkly
description: "LaunchDarkly (launchdarkly.com). Use this skill for ANY LaunchDarkly request — reading, creating, updating, and deleting data. Whenever a task involves LaunchDarkly, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "LaunchDarkly"
  author: "OOMOL"
  version: "1.0.0"
  service: "launch_darkly"
  categories: "Developer Tools"
  homepage: "https://launchdarkly.com"
  icon: "https://static.oomol.com/logo/third-party/LaunchDarkly.svg"
---

# LaunchDarkly

Operate **LaunchDarkly** through your OOMOL-connected account. This skill calls the `launch_darkly` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 40 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected LaunchDarkly. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "launch_darkly" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "launch_darkly" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_member_to_teams`](actions/add_member_to_teams.md) — Add one or more LaunchDarkly members to one or more teams with a semantic patch update.
- [`create_environment`](actions/create_environment.md) — Create a LaunchDarkly environment using either common fields or a full official request body.
- [`create_feature_flag`](actions/create_feature_flag.md) — Create a LaunchDarkly feature flag using either common fields or a full official request body.
- [`create_project`](actions/create_project.md) — Create a LaunchDarkly project using either common fields or a full official request body.
- [`create_segment`](actions/create_segment.md) — Create a LaunchDarkly segment using either common fields or a full official request body.
- [`create_team`](actions/create_team.md) — Create a LaunchDarkly team using either common fields or a full official request body.
- [`create_token`](actions/create_token.md) — Create a LaunchDarkly access token using either common fields or a full official request body.
- [`delete_environment`](actions/delete_environment.md) — Delete a LaunchDarkly environment by project key and environment key.
- [`delete_feature_flag`](actions/delete_feature_flag.md) — Delete a LaunchDarkly feature flag by project key and feature flag key.
- [`delete_project`](actions/delete_project.md) — Delete a LaunchDarkly project by project key.
- [`delete_segment`](actions/delete_segment.md) — Delete a LaunchDarkly segment by project key, environment key, and segment key.
- [`delete_team`](actions/delete_team.md) — Delete a LaunchDarkly team by team key.
- [`delete_token`](actions/delete_token.md) — Delete a LaunchDarkly access token by token identifier.
- [`get_caller_identity`](actions/get_caller_identity.md) — Get the LaunchDarkly caller identity for the current access token.
- [`get_context_instances`](actions/get_context_instances.md) — Get a LaunchDarkly context instance by project key, environment key, and context instance identifier.
- [`get_contexts`](actions/get_contexts.md) — Get a LaunchDarkly context by context kind and key, with optional paging over related results.
- [`get_environment`](actions/get_environment.md) — Get a LaunchDarkly environment by project key and environment key.
- [`get_environments`](actions/get_environments.md) — List the LaunchDarkly environments that belong to a project.
- [`get_feature_flag`](actions/get_feature_flag.md) — Get a LaunchDarkly feature flag by project key and feature flag key.
- [`get_feature_flags`](actions/get_feature_flags.md) — List LaunchDarkly feature flags in a project with optional filtering, pagination, and summary output.
- [`get_member`](actions/get_member.md) — Get a LaunchDarkly account member by member identifier.
- [`get_members`](actions/get_members.md) — List LaunchDarkly account members with optional filtering, sorting, pagination, and expansion.
- [`get_project`](actions/get_project.md) — Get a LaunchDarkly project by project key.
- [`get_segment`](actions/get_segment.md) — Get a LaunchDarkly segment by project key, environment key, and segment key.
- [`get_segments`](actions/get_segments.md) — List LaunchDarkly segments in a project environment with optional filtering and pagination.
- [`get_tags`](actions/get_tags.md) — List LaunchDarkly tags with optional prefix and resource-kind filters.
- [`get_team`](actions/get_team.md) — Get a LaunchDarkly team by team key.
- [`get_token`](actions/get_token.md) — Get a LaunchDarkly access token by token identifier.
- [`get_tokens`](actions/get_tokens.md) — List LaunchDarkly access tokens with optional pagination and visibility scope.
- [`list_projects`](actions/list_projects.md) — List LaunchDarkly projects with optional filtering, sorting, pagination, and expansion.
- [`list_teams`](actions/list_teams.md) — List LaunchDarkly teams with optional filtering, pagination, and expansion controls.
- [`patch_environment`](actions/patch_environment.md) — Patch a LaunchDarkly environment with standard JSON Patch operations.
- [`patch_feature_flag`](actions/patch_feature_flag.md) — Patch a LaunchDarkly feature flag with JSON Patch, JSON Merge Patch, or semantic patch instructions.
- [`patch_project`](actions/patch_project.md) — Patch a LaunchDarkly project with standard JSON Patch operations.
- [`patch_segment`](actions/patch_segment.md) — Patch a LaunchDarkly segment with JSON Patch, JSON Merge Patch, or semantic patch instructions.
- [`patch_team`](actions/patch_team.md) — Patch a LaunchDarkly team with semantic patch instructions.
- [`patch_token`](actions/patch_token.md) — Patch a LaunchDarkly access token with standard JSON Patch operations.
- [`reset_token`](actions/reset_token.md) — Reset a LaunchDarkly access token value and optionally control when the old value expires.
- [`search_context_instances`](actions/search_context_instances.md) — Search LaunchDarkly context instances in a project environment with filtering, sorting, and pagination.
- [`search_contexts`](actions/search_contexts.md) — Search LaunchDarkly contexts in a project environment with filtering, sorting, and pagination.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change LaunchDarkly state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — LaunchDarkly is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=launch_darkly
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- LaunchDarkly homepage: https://launchdarkly.com
