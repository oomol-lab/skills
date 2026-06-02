---
name: oo-fireflies
description: "Fireflies (fireflies.ai). Use this skill for ANY Fireflies request — reading, creating, updating, and deleting data. Whenever a task involves Fireflies, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Fireflies"
  author: "OOMOL"
  version: "1.0.0"
  service: "fireflies"
  categories: "AI, Productivity, Communication"
  homepage: "https://www.fireflies.ai"
  icon: "https://static.oomol.com/logo/third-party/Fireflies.svg"
---

# Fireflies

Operate **Fireflies** through your OOMOL-connected account. This skill calls the `fireflies` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Productivity, Communication. Exposes 22 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Fireflies. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "fireflies" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "fireflies" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`continue_askfred_thread`](actions/continue_askfred_thread.md) — Continue a Fireflies AskFred thread with a follow-up question.
- [`create_askfred_thread`](actions/create_askfred_thread.md) — Create a Fireflies AskFred thread from a meeting question.
- [`create_bite`](actions/create_bite.md) — Create a Fireflies bite from a transcript time range.
- [`delete_askfred_thread`](actions/delete_askfred_thread.md) — Delete a Fireflies AskFred thread by thread ID.
- [`delete_transcript`](actions/delete_transcript.md) — Delete a Fireflies transcript by transcript ID.
- [`execute_graphql_query`](actions/execute_graphql_query.md) — Execute a raw read-only Fireflies GraphQL query and return the raw response.
- [`get_askfred_thread`](actions/get_askfred_thread.md) — Get a Fireflies AskFred thread by thread ID.
- [`get_bite`](actions/get_bite.md) — Get a Fireflies bite by bite ID.
- [`get_current_user`](actions/get_current_user.md) — Get the authenticated Fireflies user for the current API key.
- [`get_transcript`](actions/get_transcript.md) — Get a Fireflies transcript by transcript ID.
- [`get_user`](actions/get_user.md) — Get a Fireflies user by user ID.
- [`list_ai_app_outputs`](actions/list_ai_app_outputs.md) — List Fireflies AI app outputs for transcripts or app IDs.
- [`list_askfred_threads`](actions/list_askfred_threads.md) — List Fireflies AskFred conversation threads.
- [`list_bites`](actions/list_bites.md) — List Fireflies bites using the available bite filters.
- [`list_channels`](actions/list_channels.md) — List Fireflies channels visible to the current API key.
- [`list_transcripts`](actions/list_transcripts.md) — List Fireflies transcripts with official filters and include flags.
- [`list_user_groups`](actions/list_user_groups.md) — List Fireflies user groups visible to the current API key.
- [`list_users`](actions/list_users.md) — List Fireflies users visible to the current API key.
- [`set_user_role`](actions/set_user_role.md) — Set a Fireflies user's role to admin or user.
- [`update_meeting_channel`](actions/update_meeting_channel.md) — Update the Fireflies channel assignments for one or more meetings.
- [`update_meeting_privacy`](actions/update_meeting_privacy.md) — Update the privacy value for a Fireflies meeting.
- [`update_meeting_title`](actions/update_meeting_title.md) — Update the title for a Fireflies meeting.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Fireflies state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Fireflies is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=fireflies
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Fireflies homepage: https://www.fireflies.ai
