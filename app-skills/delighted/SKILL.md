---
name: delighted
description: "Delighted (delighted.com). Use this skill for ANY Delighted request — reading, creating, updating, and deleting data. Whenever a task involves Delighted, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Delighted"
  author: "OOMOL"
  version: "1.0.0"
  service: "delighted"
  categories: "Marketing, Data & Analytics"
  homepage: "https://delighted.com"
  icon: "https://static.oomol.com/logo/third-party/Delighted.svg"
---

# Delighted

Operate **Delighted** through your OOMOL-connected account. This skill calls the `delighted` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Data & Analytics. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Delighted. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "delighted" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "delighted" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_or_update_person`](actions/create_or_update_person.md) — Create or update a Delighted person and optionally schedule a survey request.
- [`delete_person`](actions/delete_person.md) — Delete a Delighted person and all related survey history.
- [`get_metrics`](actions/get_metrics.md) — Retrieve Net Promoter Score and related metrics from Delighted.
- [`list_bounced_people`](actions/list_bounced_people.md) — List bounced people in the connected Delighted account.
- [`list_people`](actions/list_people.md) — List people in the connected Delighted account.
- [`list_survey_responses`](actions/list_survey_responses.md) — List survey responses collected in the connected Delighted account.
- [`list_unsubscribed_people`](actions/list_unsubscribed_people.md) — List unsubscribed people in the connected Delighted account.
- [`unsubscribe_person`](actions/unsubscribe_person.md) — Add a person to the Delighted unsubscribe list.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Delighted state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Delighted is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=delighted
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Delighted homepage: https://delighted.com
