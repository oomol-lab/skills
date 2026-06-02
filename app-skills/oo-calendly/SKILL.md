---
name: oo-calendly
description: "Calendly (calendly.com). Use this skill for ANY Calendly request — reading, creating, updating, and deleting data. Whenever a task involves Calendly, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Calendly"
  author: "OOMOL"
  version: "1.0.0"
  service: "calendly"
  categories: "Productivity"
  homepage: "https://calendly.com"
  icon: "https://static.oomol.com/logo/third-party/Calendly.svg"
---

# Calendly

Operate **Calendly** through your OOMOL-connected account. This skill calls the `calendly` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 37 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Calendly. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "calendly" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "calendly" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`cancel_scheduled_event`](actions/cancel_scheduled_event.md) — Cancel one Calendly scheduled event by scheduled-event URI.
- [`create_event_invitee`](actions/create_event_invitee.md) — Create one Calendly invitee booking for a confirmed available start time.
- [`create_invitee_no_show`](actions/create_invitee_no_show.md) — Mark one Calendly invitee as a no-show by invitee URI.
- [`create_organization_invitation`](actions/create_organization_invitation.md) — Create one organization invitation for a Calendly organization.
- [`create_share`](actions/create_share.md) — Create one customized single-use share from an existing Calendly event type.
- [`create_single_use_scheduling_link`](actions/create_single_use_scheduling_link.md) — Create one single-use scheduling link from an existing Calendly event type without customization.
- [`create_webhook_subscription`](actions/create_webhook_subscription.md) — Create one Calendly webhook subscription for an organization or one user.
- [`delete_invitee_no_show`](actions/delete_invitee_no_show.md) — Delete one Calendly invitee no-show by no-show URI.
- [`delete_organization_membership`](actions/delete_organization_membership.md) — Delete one Calendly organization membership by membership URI.
- [`delete_webhook_subscription`](actions/delete_webhook_subscription.md) — Delete one Calendly webhook subscription by URI.
- [`get_current_user`](actions/get_current_user.md) — Retrieve the authenticated Calendly user for the connected personal access token.
- [`get_event_invitee`](actions/get_event_invitee.md) — Retrieve one Calendly invitee by invitee URI.
- [`get_event_type`](actions/get_event_type.md) — Retrieve one Calendly event type by event type URI.
- [`get_invitee_no_show`](actions/get_invitee_no_show.md) — Retrieve one Calendly invitee no-show by no-show URI.
- [`get_organization`](actions/get_organization.md) — Retrieve one Calendly organization by organization URI.
- [`get_organization_membership`](actions/get_organization_membership.md) — Retrieve one Calendly organization membership by membership URI.
- [`get_routing_form`](actions/get_routing_form.md) — Retrieve one Calendly routing form by routing-form URI.
- [`get_routing_form_submission`](actions/get_routing_form_submission.md) — Retrieve one Calendly routing form submission by submission URI.
- [`get_scheduled_event`](actions/get_scheduled_event.md) — Retrieve one Calendly scheduled event by scheduled-event URI.
- [`get_user`](actions/get_user.md) — Retrieve one Calendly user by user URI.
- [`get_user_availability_schedule`](actions/get_user_availability_schedule.md) — Retrieve one Calendly user availability schedule by schedule URI.
- [`get_webhook_subscription`](actions/get_webhook_subscription.md) — Retrieve one Calendly webhook subscription by URI.
- [`list_event_invitees`](actions/list_event_invitees.md) — List invitees for one Calendly scheduled event.
- [`list_event_type_availability_schedules`](actions/list_event_type_availability_schedules.md) — List the official Calendly availability schedules attached to one event type.
- [`list_event_type_available_times`](actions/list_event_type_available_times.md) — List available time slots for one Calendly event type within a 7-day window.
- [`list_event_types`](actions/list_event_types.md) — List Calendly event types for exactly one user or one organization, including scheduling URLs.
- [`list_organization_invitations`](actions/list_organization_invitations.md) — List organization invitations for one Calendly organization.
- [`list_organization_memberships`](actions/list_organization_memberships.md) — List Calendly organization memberships for one organization or one user.
- [`list_routing_form_submissions`](actions/list_routing_form_submissions.md) — List Calendly routing form submissions for one routing form.
- [`list_routing_forms`](actions/list_routing_forms.md) — List Calendly routing forms for one organization.
- [`list_scheduled_events`](actions/list_scheduled_events.md) — List Calendly scheduled events for exactly one user or one organization.
- [`list_user_availability_schedules`](actions/list_user_availability_schedules.md) — List user availability schedules for one Calendly user.
- [`list_user_busy_times`](actions/list_user_busy_times.md) — List busy time slots for one Calendly user within a 7-day window.
- [`list_user_meeting_locations`](actions/list_user_meeting_locations.md) — List the configured meeting locations for one Calendly user.
- [`list_webhook_subscriptions`](actions/list_webhook_subscriptions.md) — List Calendly webhook subscriptions for an organization or one user.
- [`revoke_organization_invitation`](actions/revoke_organization_invitation.md) — Revoke one organization invitation from a Calendly organization.
- [`update_event_type_availability_schedule`](actions/update_event_type_availability_schedule.md) — Update the official Calendly availability schedule for one event type.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Calendly state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Calendly is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2, API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=calendly
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Calendly homepage: https://calendly.com
