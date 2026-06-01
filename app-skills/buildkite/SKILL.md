---
name: buildkite
description: "Buildkite (buildkite.com). Use this skill for ANY Buildkite request — reading, creating, and updating data. Whenever a task involves Buildkite, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Buildkite"
  author: "OOMOL"
  version: "1.0.0"
  service: "buildkite"
  categories: "Developer Tools"
  homepage: "https://buildkite.com"
  icon: "https://static.oomol.com/logo/third-party/Buildkite.svg"
---

# Buildkite

Operate **Buildkite** through your OOMOL-connected account. This skill calls the `buildkite` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 12 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Buildkite. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "buildkite" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "buildkite" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`cancel_build`](actions/cancel_build.md) — Cancel a Buildkite build by build number.
- [`create_build`](actions/create_build.md) — Create a new Buildkite build for a pipeline.
- [`get_build`](actions/get_build.md) — Get a single Buildkite build by organization, pipeline slug, and build number.
- [`get_current_access_token`](actions/get_current_access_token.md) — Inspect the current Buildkite API access token, including scopes and owner summary.
- [`get_current_user`](actions/get_current_user.md) — Get the Buildkite user account that owns the current API access token.
- [`get_organization`](actions/get_organization.md) — Get a single Buildkite organization by slug.
- [`get_pipeline`](actions/get_pipeline.md) — Get a single Buildkite pipeline by organization and pipeline slug.
- [`list_builds_for_organization`](actions/list_builds_for_organization.md) — List builds across all pipelines in a Buildkite organization.
- [`list_builds_for_pipeline`](actions/list_builds_for_pipeline.md) — List builds for a single Buildkite pipeline.
- [`list_organizations`](actions/list_organizations.md) — List Buildkite organizations accessible to the current API token.
- [`list_pipelines`](actions/list_pipelines.md) — List Buildkite pipelines for an organization.
- [`rebuild_build`](actions/rebuild_build.md) — Rebuild a Buildkite build by build number.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Buildkite state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Buildkite is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=buildkite
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Buildkite homepage: https://buildkite.com
