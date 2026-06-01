---
name: sentry
description: "Sentry (sentry.io). Use this skill for ANY Sentry request — reading, creating, and updating data. Whenever a task involves Sentry, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Sentry"
  author: "OOMOL"
  version: "1.0.0"
  service: "sentry"
  categories: "Developer Tools, Security & Identity"
  homepage: "https://sentry.io"
  icon: "https://static.oomol.com/logo/third-party/Sentry.svg"
---

# Sentry

Operate **Sentry** through your OOMOL-connected account. This skill calls the `sentry` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Security & Identity. Exposes 19 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Sentry. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "sentry" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "sentry" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_alert`](actions/get_alert.md) — Get one alert workflow in a Sentry organization by workflow id.
- [`get_issue`](actions/get_issue.md) — Get one issue in a Sentry organization by numeric id or short id.
- [`get_issue_event`](actions/get_issue_event.md) — Get one event for a Sentry issue by event id, or use latest, oldest, or recommended selectors.
- [`get_organization_integration`](actions/get_organization_integration.md) — Get one installed Sentry organization integration by its integration id.
- [`get_organization_integration_config`](actions/get_organization_integration_config.md) — List available integration provider configs for a Sentry organization, optionally filtered by provider key.
- [`get_organization_release`](actions/get_organization_release.md) — Get one release in a Sentry organization, with optional health and summary statistics included.
- [`get_project`](actions/get_project.md) — Get one Sentry project by organization and project slug or id.
- [`get_release_health_stats`](actions/get_release_health_stats.md) — Retrieve release health session statistics for one Sentry release by querying the sessions endpoint with that release version.
- [`get_replay`](actions/get_replay.md) — Get one replay instance in a Sentry organization by replay id.
- [`get_sentry_app`](actions/get_sentry_app.md) — Get one Sentry App by id or slug, including integration metadata and OAuth client settings.
- [`list_alerts`](actions/list_alerts.md) — List alert workflows for a Sentry organization, with optional id, project, and search filters.
- [`list_issue_events`](actions/list_issue_events.md) — List events that belong to one Sentry issue, with optional event query filters.
- [`list_organization_integrations`](actions/list_organization_integrations.md) — List installed integrations for a Sentry organization, with optional provider and feature filters.
- [`list_organization_issues`](actions/list_organization_issues.md) — List issues for a Sentry organization with optional search, project, and environment filters.
- [`list_organization_projects`](actions/list_organization_projects.md) — List projects that belong to a Sentry organization.
- [`list_organization_releases`](actions/list_organization_releases.md) — List releases that belong to a Sentry organization, optionally filtered by version prefix.
- [`list_organization_replays`](actions/list_organization_replays.md) — List session replays for a Sentry organization, with optional project and environment filters.
- [`list_organization_sentry_apps`](actions/list_organization_sentry_apps.md) — List the custom Sentry Apps created by a Sentry organization.
- [`update_issue`](actions/update_issue.md) — Update mutable attributes on one Sentry issue, such as status, assignment, or bookmarks.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Sentry state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Sentry is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=sentry
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Sentry homepage: https://sentry.io
