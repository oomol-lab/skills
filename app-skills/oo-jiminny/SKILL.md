---
name: oo-jiminny
description: "Jiminny (jiminny.com). Use this skill for ANY Jiminny request — searching and reading data. Whenever a task involves Jiminny, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Jiminny"
  author: "OOMOL"
  version: "1.0.0"
  services: ["jiminny"]
---

# Jiminny

Operate **Jiminny** through your OOMOL-connected account. This skill calls the `jiminny` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Jiminny. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "jiminny" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "jiminny" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `get_action_items` — Retrieve generated action items for a Jiminny activity.
- `get_activity` — Retrieve one Jiminny activity by activity UUID.
- `get_ai_scorecard` — Retrieve AI scorecard results for a Jiminny activity.
- `get_current_organization` — Return the current authenticated Jiminny organization.
- `get_summary` — Retrieve the generated summary for a Jiminny activity.
- `get_transcription` — Retrieve transcription segments for a Jiminny activity.
- `list_activities` — List completed and processed Jiminny activities with date and CRM filters.
- `list_ai_scorecards` — List Jiminny AI scorecard results completed within a date range.
- `list_automated_call_scoring` — List Jiminny automated call scoring records with optional filters.
- `list_coaching_feedback` — List Jiminny coaching feedback records for a required date range.
- `list_comments` — List Jiminny activity comments with optional user and date filters.
- `list_listens` — List listened activity data for a Jiminny date range.
- `list_matched_topic_triggers` — List topic trigger matches for a Jiminny activity.
- `list_questions` — List playback questions detected in a Jiminny activity.
- `list_topic_triggers` — List Jiminny topic trigger definitions for the authenticated organization.
- `list_users` — List Jiminny users for the authenticated organization.

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Jiminny state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Jiminny is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=jiminny
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Jiminny homepage: https://jiminny.com
