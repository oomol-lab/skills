---
name: oo-new-relic
description: "New Relic (newrelic.com). Use this skill for ANY New Relic request — reading, creating, updating, and deleting data. Whenever a task involves New Relic, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "New Relic"
  author: "OOMOL"
  version: "1.0.0"
  service: "new_relic"
  categories: "Developer Tools"
  homepage: "https://newrelic.com"
  icon: "https://static.oomol.com/logo/third-party/New%20Relic.svg"
---

# New Relic

Operate **New Relic** through your OOMOL-connected account. This skill calls the `new_relic` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 28 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected New Relic. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "new_relic" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "new_relic" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_alert_policy`](actions/create_alert_policy.md) — Create a New Relic alert policy using the REST alerts API.
- [`create_dashboard`](actions/create_dashboard.md) — Create a New Relic dashboard with pages and widgets using NerdGraph.
- [`create_dashboard_snapshot_url`](actions/create_dashboard_snapshot_url.md) — Generate a snapshot URL for a New Relic dashboard page GUID.
- [`create_deployment_marker`](actions/create_deployment_marker.md) — Create a New Relic change-tracking deployment marker for an entity GUID using NerdGraph.
- [`create_nrql_condition`](actions/create_nrql_condition.md) — Create a static or baseline NRQL alert condition for a policy using the REST alerts API.
- [`create_secure_credential`](actions/create_secure_credential.md) — Create a New Relic synthetic secure credential using NerdGraph.
- [`create_synthetics_simple_monitor`](actions/create_synthetics_simple_monitor.md) — Create a New Relic ping monitor by using the syntheticsCreateSimpleMonitor mutation.
- [`delete_alert_policy`](actions/delete_alert_policy.md) — Delete a New Relic alert policy using the REST alerts API.
- [`delete_dashboard`](actions/delete_dashboard.md) — Delete a New Relic dashboard by its entity GUID.
- [`delete_nrql_condition`](actions/delete_nrql_condition.md) — Delete a New Relic NRQL alert condition using the REST alerts API.
- [`delete_secure_credential`](actions/delete_secure_credential.md) — Delete a New Relic synthetic secure credential using NerdGraph.
- [`delete_synthetics_monitor`](actions/delete_synthetics_monitor.md) — Delete a synthetic monitor by GUID using the syntheticsDeleteMonitor mutation.
- [`execute_nrql_query`](actions/execute_nrql_query.md) — Execute an NRQL query against a specific New Relic account and return the query results and metadata.
- [`get_alert_policies`](actions/get_alert_policies.md) — List New Relic alert policies with optional name, incident preference, and pagination filters using the REST alerts API.
- [`get_current_user`](actions/get_current_user.md) — Validate the connected New Relic user key and return the current user profile from NerdGraph.
- [`get_dashboard_entity`](actions/get_dashboard_entity.md) — Read a New Relic dashboard entity, including its pages and widgets, by GUID.
- [`get_secure_credential`](actions/get_secure_credential.md) — Get a synthetic secure credential by key using NerdGraph entity search metadata only.
- [`get_synth_monitor`](actions/get_synth_monitor.md) — Get a synthetic monitor by its legacy monitor ID or entity GUID using NerdGraph entity search.
- [`list_deployments`](actions/list_deployments.md) — List deployment markers for a legacy APM application by using the REST v2 deployments API.
- [`list_monitors`](actions/list_monitors.md) — List synthetic monitors by using NerdGraph entity search over the SYNTH MONITOR entity type.
- [`list_nrql_conditions`](actions/list_nrql_conditions.md) — List NRQL alert conditions for a specific alert policy using the REST alerts API.
- [`list_secure_credentials`](actions/list_secure_credentials.md) — List synthetic secure credentials by using NerdGraph entity search over the SYNTH SECURE_CRED entity type.
- [`search_entities`](actions/search_entities.md) — Search New Relic entities with either the raw entity search language or a structured query builder.
- [`update_alert_policy`](actions/update_alert_policy.md) — Update a New Relic alert policy name or incident preference using the REST alerts API.
- [`update_dashboard`](actions/update_dashboard.md) — Update a New Relic dashboard by GUID, replacing the dashboard configuration with the supplied pages and widgets.
- [`update_nrql_condition`](actions/update_nrql_condition.md) — Update a static or baseline NRQL alert condition using the REST alerts API.
- [`update_secure_credential`](actions/update_secure_credential.md) — Update a New Relic synthetic secure credential value or description using NerdGraph.
- [`update_synthetics_simple_monitor`](actions/update_synthetics_simple_monitor.md) — Update a New Relic ping monitor by GUID using the syntheticsUpdateSimpleMonitor mutation.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change New Relic state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — New Relic is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=new_relic
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- New Relic homepage: https://newrelic.com
