---
name: posthog
description: "PostHog (posthog.com). Use this skill for ANY PostHog request — reading, creating, updating, and deleting data. Whenever a task involves PostHog, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "PostHog"
  author: "OOMOL"
  version: "1.0.0"
  service: "posthog"
  categories: "Data & Analytics, Developer Tools"
  homepage: "https://posthog.com"
  icon: "https://static.oomol.com/logo/third-party/PostHog.svg"
---

# PostHog

Operate **PostHog** through your OOMOL-connected account. This skill calls the `posthog` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Developer Tools. Exposes 57 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected PostHog. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "posthog" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "posthog" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_dashboard_collaborator`](actions/add_dashboard_collaborator.md) — Add a collaborator to a PostHog dashboard.
- [`add_persons_to_static_cohort`](actions/add_persons_to_static_cohort.md) — Add person UUIDs to a static PostHog cohort.
- [`bulk_update_event_definition_tags`](actions/bulk_update_event_definition_tags.md) — Bulk add, remove, or set tags on PostHog event definitions.
- [`bulk_update_property_definition_tags`](actions/bulk_update_property_definition_tags.md) — Bulk add, remove, or set tags on PostHog property definitions.
- [`cancel_query`](actions/cancel_query.md) — Cancel a PostHog async query by project ID and query ID.
- [`copy_dashboard_tile`](actions/copy_dashboard_tile.md) — Copy an existing PostHog dashboard tile to another dashboard.
- [`create_annotation`](actions/create_annotation.md) — Create an annotation in a PostHog project.
- [`create_cohort`](actions/create_cohort.md) — Create a cohort in a PostHog project.
- [`create_dashboard`](actions/create_dashboard.md) — Create a PostHog dashboard in a project.
- [`create_event_definition`](actions/create_event_definition.md) — Create an event definition for a PostHog project.
- [`create_feature_flag`](actions/create_feature_flag.md) — Create a feature flag in a PostHog project.
- [`create_insight`](actions/create_insight.md) — Create a saved PostHog insight in a project.
- [`delete_annotation`](actions/delete_annotation.md) — Mark a PostHog annotation as deleted using the official soft-delete contract.
- [`delete_cohort`](actions/delete_cohort.md) — Mark a PostHog cohort as deleted using the official soft-delete contract.
- [`delete_dashboard`](actions/delete_dashboard.md) — Mark a PostHog dashboard as deleted using the official soft-delete contract.
- [`delete_event_definition`](actions/delete_event_definition.md) — Delete a PostHog event definition by ID.
- [`delete_feature_flag`](actions/delete_feature_flag.md) — Soft delete a PostHog feature flag by setting deleted to true.
- [`delete_insight`](actions/delete_insight.md) — Delete a saved PostHog insight by ID.
- [`delete_property_definition`](actions/delete_property_definition.md) — Delete a PostHog property definition by ID.
- [`get_annotation`](actions/get_annotation.md) — Get a PostHog annotation by ID.
- [`get_async_query_status`](actions/get_async_query_status.md) — Retrieve the status and available result payload for a PostHog async query.
- [`get_cohort`](actions/get_cohort.md) — Get a PostHog cohort by ID.
- [`get_cohort_calculation_history`](actions/get_cohort_calculation_history.md) — Get the raw calculation history payload for a PostHog cohort.
- [`get_cohort_persons`](actions/get_cohort_persons.md) — List persons that belong to a PostHog cohort.
- [`get_current_user`](actions/get_current_user.md) — Get the current user associated with the PostHog personal API key.
- [`get_dashboard`](actions/get_dashboard.md) — Get a PostHog dashboard by ID with a stable top-level connector shape.
- [`get_event_definition`](actions/get_event_definition.md) — Get a PostHog event definition by ID.
- [`get_event_definition_by_name`](actions/get_event_definition_by_name.md) — Get a PostHog event definition by exact event name.
- [`get_event_definition_primary_properties`](actions/get_event_definition_primary_properties.md) — Get primary properties configured for PostHog event definitions.
- [`get_feature_flag`](actions/get_feature_flag.md) — Get a PostHog feature flag by ID.
- [`get_feature_flag_dependent_flags`](actions/get_feature_flag_dependent_flags.md) — List the feature flags that depend on a PostHog feature flag.
- [`get_feature_flag_status`](actions/get_feature_flag_status.md) — Get the computed status for a PostHog feature flag.
- [`get_feature_flags_local_evaluation`](actions/get_feature_flags_local_evaluation.md) — Get the local evaluation payload for PostHog feature flags.
- [`get_insight`](actions/get_insight.md) — Get a PostHog insight by ID with a stable top-level connector shape.
- [`get_project`](actions/get_project.md) — Get a PostHog project from the current or specified organization.
- [`get_property_definition`](actions/get_property_definition.md) — Get a PostHog property definition by ID.
- [`list_annotations`](actions/list_annotations.md) — List annotations for a PostHog project.
- [`list_cohorts`](actions/list_cohorts.md) — List cohorts for a PostHog project.
- [`list_dashboard_collaborators`](actions/list_dashboard_collaborators.md) — List collaborators for a PostHog dashboard.
- [`list_dashboards`](actions/list_dashboards.md) — List dashboards for a PostHog project.
- [`list_event_definitions`](actions/list_event_definitions.md) — List event definitions for a PostHog project.
- [`list_feature_flags`](actions/list_feature_flags.md) — List feature flags for a PostHog project.
- [`list_insights`](actions/list_insights.md) — List insights for a PostHog project.
- [`list_projects`](actions/list_projects.md) — List PostHog projects for the current or specified organization.
- [`list_property_definitions`](actions/list_property_definitions.md) — List property definitions for a PostHog project.
- [`move_dashboard_tile`](actions/move_dashboard_tile.md) — Move a PostHog dashboard tile to another dashboard.
- [`remove_dashboard_collaborator`](actions/remove_dashboard_collaborator.md) — Remove a collaborator from a PostHog dashboard.
- [`reorder_dashboard_tiles`](actions/reorder_dashboard_tiles.md) — Reorder tiles on a PostHog dashboard.
- [`run_dashboard_insights`](actions/run_dashboard_insights.md) — Run all insights on a PostHog dashboard and return their results.
- [`run_query`](actions/run_query.md) — Run a PostHog query and return a stable top-level query result shape.
- [`update_annotation`](actions/update_annotation.md) — Partially update a PostHog annotation by ID.
- [`update_cohort`](actions/update_cohort.md) — Partially update a PostHog cohort by ID.
- [`update_dashboard`](actions/update_dashboard.md) — Partially update a PostHog dashboard by ID.
- [`update_event_definition`](actions/update_event_definition.md) — Partially update a PostHog event definition by ID.
- [`update_feature_flag`](actions/update_feature_flag.md) — Partially update a PostHog feature flag by ID.
- [`update_insight`](actions/update_insight.md) — Update a saved PostHog insight by ID.
- [`update_property_definition`](actions/update_property_definition.md) — Partially update a PostHog property definition by ID.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change PostHog state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — PostHog is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2, API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=posthog
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- PostHog homepage: https://posthog.com
