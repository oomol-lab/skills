---
name: oo-zoom
description: "Zoom (zoom.com). Use this skill for ANY Zoom request — reading, creating, and updating data. Whenever a task involves Zoom, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Zoom"
  author: "OOMOL"
  version: "1.0.0"
  service: "zoom"
  categories: "Communication, Productivity"
  homepage: "https://www.zoom.com"
  icon: "https://static.oomol.com/logo/third-party/zoom.svg"
---

# Zoom

Operate **Zoom** through your OOMOL-connected account. This skill calls the `zoom` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Productivity. Exposes 18 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Zoom. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "zoom" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "zoom" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_meeting_registrant`](actions/add_meeting_registrant.md) — Register one participant for a Zoom meeting that has registration enabled.
- [`add_webinar_registrant`](actions/add_webinar_registrant.md) — Register one participant for a Zoom webinar that has registration enabled.
- [`create_meeting`](actions/create_meeting.md) — Create a Zoom meeting for a user with the core official scheduling fields and first-pass settings.
- [`get_meeting_recordings`](actions/get_meeting_recordings.md) — Fetch recording metadata and file URLs for one Zoom meeting without downloading files.
- [`get_meeting_summary`](actions/get_meeting_summary.md) — Fetch the AI Companion summary for a Zoom meeting when available.
- [`get_user`](actions/get_user.md) — Fetch one Zoom user by user ID, email address, or me when supported by the app.
- [`get_user_settings`](actions/get_user_settings.md) — Fetch Zoom settings for one user, optionally limited to one settings group.
- [`get_user_summary`](actions/get_user_summary.md) — Fetch Zoom account user summary metrics visible to the connected OAuth app.
- [`get_webinar_summary`](actions/get_webinar_summary.md) — Fetch the AI Companion summary for a Zoom webinar when available.
- [`list_archived_files`](actions/list_archived_files.md) — List archived Zoom meeting and webinar files for a short official date window.
- [`list_meeting_registrants`](actions/list_meeting_registrants.md) — List registrants for a Zoom meeting using official pagination.
- [`list_meetings`](actions/list_meetings.md) — List scheduled, live, upcoming, or previous meetings for a Zoom user using official pagination.
- [`list_user_recordings`](actions/list_user_recordings.md) — List cloud recordings for a Zoom user without downloading recording files.
- [`list_users`](actions/list_users.md) — List users in the Zoom account visible to the connected OAuth app.
- [`list_webinar_participants`](actions/list_webinar_participants.md) — List participants who attended a past Zoom webinar using official pagination.
- [`list_webinar_registrants`](actions/list_webinar_registrants.md) — List registrants for a Zoom webinar using official pagination.
- [`list_webinars`](actions/list_webinars.md) — List scheduled webinars for a Zoom user using official pagination.
- [`update_meeting`](actions/update_meeting.md) — Update a Zoom meeting by meeting ID with the core official scheduling fields and first-pass settings.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Zoom state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Zoom is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=zoom
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Zoom homepage: https://www.zoom.com
