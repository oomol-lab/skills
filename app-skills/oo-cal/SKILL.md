---
name: oo-cal
description: "Cal.com (cal.com). Use this skill for ANY Cal.com request — reading, creating, updating, and deleting data. Whenever a task involves Cal.com, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Cal.com"
  author: "OOMOL"
  version: "1.0.0"
  service: "cal"
  categories: "Productivity, Communication"
  homepage: "https://cal.com"
  icon: "https://static.oomol.com/logo/third-party/Cal.svg"
---

# Cal.com

Operate **Cal.com** through your OOMOL-connected account. This skill calls the `cal` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Communication. Exposes 47 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Cal.com. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "cal" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "cal" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_attendee`](actions/add_attendee.md) — Add an attendee to a Cal.com booking.
- [`cancel_booking`](actions/cancel_booking.md) — Cancel a Cal.com booking by UID, optionally providing a cancellation reason.
- [`cancel_booking_via_uid`](actions/cancel_booking_via_uid.md) — Compatibility alias for Composio's cancel-booking-via-uid action. Cancels a booking by UID.
- [`confirm_booking_by_uid`](actions/confirm_booking_by_uid.md) — Confirm a Cal.com booking by UID.
- [`create_booking`](actions/create_booking.md) — Create a Cal.com booking.
- [`create_event_type`](actions/create_event_type.md) — Create a Cal.com event type for the authenticated user.
- [`create_schedule`](actions/create_schedule.md) — Create a schedule for the authenticated Cal.com user.
- [`create_user_availability_schedule`](actions/create_user_availability_schedule.md) — Compatibility alias for Composio's create-user-availability-schedule action. Creates a schedule.
- [`decline_booking_with_reason`](actions/decline_booking_with_reason.md) — Decline a Cal.com booking by UID with an optional reason.
- [`delete_event_type`](actions/delete_event_type.md) — Delete a Cal.com event type by numeric ID.
- [`delete_event_type_by_id`](actions/delete_event_type_by_id.md) — Compatibility alias for Composio's delete-event-type-by-id action. Deletes a Cal.com event type by ID.
- [`delete_schedule`](actions/delete_schedule.md) — Delete a schedule for the authenticated Cal.com user.
- [`delete_schedule_by_id`](actions/delete_schedule_by_id.md) — Compatibility alias for Composio's delete-schedule-by-id action. Deletes a schedule.
- [`fetch_all_bookings`](actions/fetch_all_bookings.md) — Compatibility alias for Composio's fetch-all-bookings action. Lists bookings with optional filters and pagination.
- [`fetch_event_type_details`](actions/fetch_event_type_details.md) — Compatibility alias for Composio's fetch-event-type-details action. Gets a single Cal.com event type by ID.
- [`fetch_schedule_by_id`](actions/fetch_schedule_by_id.md) — Compatibility alias for Composio's fetch-schedule-by-id action. Gets a schedule by numeric ID.
- [`get_available_slots_info`](actions/get_available_slots_info.md) — Compatibility action for Composio's get-available-slots-info. Returns available slots for a user, team, or event type.
- [`get_booking`](actions/get_booking.md) — Get a Cal.com booking by booking UID.
- [`get_booking_references`](actions/get_booking_references.md) — Compatibility alias for Composio's get-booking-references action. Lists booking references.
- [`get_default_schedule`](actions/get_default_schedule.md) — Get the default schedule for the authenticated Cal.com user.
- [`get_default_schedule_details`](actions/get_default_schedule_details.md) — Compatibility alias for Composio's get-default-schedule-details action. Returns the default schedule for the authenticated user.
- [`get_event_type`](actions/get_event_type.md) — Get a single Cal.com event type by its numeric ID.
- [`get_event_type_private_links`](actions/get_event_type_private_links.md) — List private links configured for a Cal.com event type.
- [`get_my_profile`](actions/get_my_profile.md) — Get the current Cal.com user profile from the authenticated OAuth account.
- [`get_schedule`](actions/get_schedule.md) — Get a Cal.com schedule by numeric schedule ID.
- [`list_attendees`](actions/list_attendees.md) — List attendees for a Cal.com booking by booking UID.
- [`list_booking_references`](actions/list_booking_references.md) — List booking references for a Cal.com booking.
- [`list_bookings`](actions/list_bookings.md) — List bookings for the authenticated Cal.com user with optional date, attendee, and event-type filters.
- [`list_event_types`](actions/list_event_types.md) — List Cal.com event types for the authenticated user with optional pagination and status filters.
- [`list_schedules`](actions/list_schedules.md) — List schedules available to the authenticated Cal.com user.
- [`mark_booking_absent_for_uid`](actions/mark_booking_absent_for_uid.md) — Mark a Cal.com booking host or attendees absent.
- [`post_new_booking_request`](actions/post_new_booking_request.md) — Compatibility alias for Composio's post-new-booking-request action. Creates a booking.
- [`reassign_booking_with_uid`](actions/reassign_booking_with_uid.md) — Reassign a round-robin booking to a specific host user ID.
- [`reschedule_booking`](actions/reschedule_booking.md) — Reschedule a Cal.com booking by UID to a new start time.
- [`reschedule_booking_by_uid`](actions/reschedule_booking_by_uid.md) — Compatibility alias for Composio's reschedule-booking-by-uid action. Reschedules a booking by UID.
- [`retrieve_booking_details_by_uid`](actions/retrieve_booking_details_by_uid.md) — Compatibility alias for Composio's retrieve-booking-details-by-uid action. Gets a booking by UID.
- [`retrieve_calendar_busy_times`](actions/retrieve_calendar_busy_times.md) — Compatibility alias for Composio's retrieve-calendar-busy-times action. Returns busy ranges for specific calendars.
- [`retrieve_calendar_list`](actions/retrieve_calendar_list.md) — Compatibility alias for Composio's retrieve-calendar-list action. Lists connected calendars and the selected destination calendar.
- [`retrieve_event_type_by_id`](actions/retrieve_event_type_by_id.md) — Compatibility alias for Composio's retrieve-event-type-by-id action. Gets a single Cal.com event type by ID.
- [`retrieve_my_information`](actions/retrieve_my_information.md) — Compatibility alias for Composio's retrieve-my-information action. Returns the authenticated Cal.com user's profile.
- [`retrieve_schedules_list`](actions/retrieve_schedules_list.md) — Compatibility alias for Composio's retrieve-schedules-list action. Lists schedules for the authenticated user.
- [`update_destination_calendar_integration`](actions/update_destination_calendar_integration.md) — Compatibility alias for Composio's update-destination-calendar-integration action. Updates the destination calendar used for created events.
- [`update_event_type`](actions/update_event_type.md) — Update a Cal.com event type by numeric ID.
- [`update_my_profile`](actions/update_my_profile.md) — Update the current Cal.com user's profile fields such as name, bio, timezone, and branding.
- [`update_schedule`](actions/update_schedule.md) — Update a schedule for the authenticated Cal.com user.
- [`update_schedule_by_id`](actions/update_schedule_by_id.md) — Compatibility alias for Composio's update-schedule-by-id action. Updates a schedule.
- [`update_user_profile_details`](actions/update_user_profile_details.md) — Compatibility alias for Composio's update-user-profile-details action. Updates the authenticated Cal.com user's profile.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Cal.com state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Cal.com is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=cal
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Cal.com homepage: https://cal.com
