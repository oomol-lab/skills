---
name: googlecalendar
description: "Google Calendar (workspace.google.com). Use this skill for ANY Google Calendar request — reading, creating, updating, and deleting data. Whenever a task involves Google Calendar, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Google Calendar"
  author: "OOMOL"
  version: "1.0.0"
  service: "googlecalendar"
  categories: "Productivity, Communication"
  homepage: "https://workspace.google.com/products/calendar/"
  icon: "https://static.oomol.com/logo/third-party/Google%20Calendar.svg"
---

# Google Calendar

Operate **Google Calendar** through your OOMOL-connected account. This skill calls the `googlecalendar` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Communication. Exposes 37 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Google Calendar. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "googlecalendar" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "googlecalendar" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_calendar_to_list`](actions/add_calendar_to_list.md) — Add a calendar to the current user's Google Calendar list.
- [`clear_calendar`](actions/clear_calendar.md) — Clear all events from a Google Calendar.
- [`create_acl_rule`](actions/create_acl_rule.md) — Create an ACL rule on a Google Calendar.
- [`create_calendar`](actions/create_calendar.md) — Create a Google Calendar.
- [`create_event`](actions/create_event.md) — Create a Google Calendar event.
- [`delete_acl_rule`](actions/delete_acl_rule.md) — Delete an ACL rule from a Google Calendar.
- [`delete_calendar`](actions/delete_calendar.md) — Delete a Google Calendar.
- [`delete_event`](actions/delete_event.md) — Delete a Google Calendar event.
- [`find_event`](actions/find_event.md) — Search events in a Google Calendar using a query string.
- [`find_free_slots`](actions/find_free_slots.md) — Derive free slots from Google Calendar freeBusy data.
- [`free_busy_query`](actions/free_busy_query.md) — Query busy intervals for calendars and groups.
- [`get_acl_rule`](actions/get_acl_rule.md) — Fetch one ACL rule from a Google Calendar.
- [`get_calendar`](actions/get_calendar.md) — Fetch one Google Calendar resource by ID.
- [`get_calendar_list_entry`](actions/get_calendar_list_entry.md) — Fetch one Google Calendar list entry by calendar ID.
- [`get_colors`](actions/get_colors.md) — Fetch the Google Calendar colors resource.
- [`get_event`](actions/get_event.md) — Fetch one Google Calendar event.
- [`get_setting`](actions/get_setting.md) — Fetch one Google Calendar setting.
- [`import_event`](actions/import_event.md) — Import an event into Google Calendar without conferenceData or attachments.
- [`list_acl`](actions/list_acl.md) — List ACL rules for a Google Calendar.
- [`list_calendars`](actions/list_calendars.md) — List the current user's Google Calendar list entries.
- [`list_event_instances`](actions/list_event_instances.md) — List instances of a recurring Google Calendar event.
- [`list_events`](actions/list_events.md) — List events from a Google Calendar.
- [`list_events_all_calendars`](actions/list_events_all_calendars.md) — List events across multiple Google Calendars and aggregate the result.
- [`list_settings`](actions/list_settings.md) — List Google Calendar settings.
- [`move_event`](actions/move_event.md) — Move a Google Calendar event to another calendar.
- [`patch_acl_rule`](actions/patch_acl_rule.md) — Patch writable fields on a Google Calendar ACL rule.
- [`patch_calendar`](actions/patch_calendar.md) — Patch writable fields on a Google Calendar resource.
- [`patch_calendar_list_entry`](actions/patch_calendar_list_entry.md) — Patch writable fields on a Google Calendar list entry.
- [`patch_event`](actions/patch_event.md) — Patch writable fields on a Google Calendar event.
- [`quick_add_event`](actions/quick_add_event.md) — Create a Google Calendar event with natural language text.
- [`remove_attendee`](actions/remove_attendee.md) — Remove one attendee email from a Google Calendar event.
- [`remove_calendar_from_list`](actions/remove_calendar_from_list.md) — Remove a calendar from the current user's Calendar list.
- [`sync_events`](actions/sync_events.md) — Incrementally sync events from a Google Calendar.
- [`update_acl_rule`](actions/update_acl_rule.md) — Replace writable fields on a Google Calendar ACL rule.
- [`update_calendar`](actions/update_calendar.md) — Replace writable fields on a Google Calendar resource.
- [`update_calendar_list_entry`](actions/update_calendar_list_entry.md) — Replace writable fields on a Google Calendar list entry.
- [`update_event`](actions/update_event.md) — Replace writable fields on a Google Calendar event.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Google Calendar state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Google Calendar is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=googlecalendar
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Google Calendar homepage: https://workspace.google.com/products/calendar/
