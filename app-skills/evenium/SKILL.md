---
name: evenium
description: "Evenium (corp.evenium.com). Use this skill for ANY Evenium request — reading, creating, and updating data. Whenever a task involves Evenium, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Evenium"
  author: "OOMOL"
  version: "1.0.0"
  service: "evenium"
  categories: "Productivity, Communication"
  homepage: "https://corp.evenium.com"
  icon: "https://static.oomol.com/logo/third-party/evenium.svg"
---

# Evenium

Operate **Evenium** through your OOMOL-connected account. This skill calls the `evenium` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Communication. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Evenium. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "evenium" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "evenium" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_event`](actions/get_event.md) — Get one Evenium event by event ID or external event ID.
- [`get_guest`](actions/get_guest.md) — Get one Evenium guest by contact ID or guest code for a given event.
- [`get_guest_post_status`](actions/get_guest_post_status.md) — Get the current post-event attendance status for one Evenium guest.
- [`get_guest_status`](actions/get_guest_status.md) — Get the current RSVP status for one Evenium guest.
- [`list_events`](actions/list_events.md) — List Evenium events with optional title, status, date filters, and pagination.
- [`list_guests`](actions/list_guests.md) — List guests for one Evenium event with optional attendee filters, expansions, and pagination.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Evenium state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Evenium is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=evenium
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Evenium homepage: https://corp.evenium.com
