---
name: oo-ticketmaster
description: "Ticketmaster (ticketmaster.com). Use this skill for ANY Ticketmaster request — searching and reading data. Whenever a task involves Ticketmaster, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Ticketmaster"
  author: "OOMOL"
  version: "1.0.0"
  service: "ticketmaster"
  categories: "Social, Data & Analytics"
  homepage: "https://www.ticketmaster.com"
  icon: "https://static.oomol.com/logo/third-party/Ticketmaster.png"
---

# Ticketmaster

Operate **Ticketmaster** through your OOMOL-connected account. This skill calls the `ticketmaster` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Social, Data & Analytics. Exposes 15 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Ticketmaster. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "ticketmaster" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "ticketmaster" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`execute_season_ticketing_command`](actions/execute_season_ticketing_command.md) — Execute a Ticketmaster Season Ticketing command and optionally poll until the command finishes.
- [`get_attraction_details`](actions/get_attraction_details.md) — Get the details for a specific Ticketmaster attraction by ID.
- [`get_attractions`](actions/get_attractions.md) — Search Discovery API attractions for artists, teams, performers, and other attraction entities.
- [`get_classification_details`](actions/get_classification_details.md) — Get the details for a specific Ticketmaster classification by ID.
- [`get_classifications`](actions/get_classifications.md) — List Discovery API classifications for segments, genres, and sub-genres.
- [`get_event_details`](actions/get_event_details.md) — Get the details for a specific Ticketmaster event by ID.
- [`get_event_images`](actions/get_event_images.md) — Get the image set for a specific Ticketmaster event.
- [`get_events`](actions/get_events.md) — Search Discovery API events with Ticketmaster filters for keyword, location, date, and taxonomy fields.
- [`get_genre_details`](actions/get_genre_details.md) — Get the details for a specific Ticketmaster genre by ID.
- [`get_section_map_image`](actions/get_section_map_image.md) — Get a section-map image for a Ticketmaster event through the Partner Availability API.
- [`get_segment_details`](actions/get_segment_details.md) — Get the details for a specific Ticketmaster segment by ID.
- [`get_subgenre_details`](actions/get_subgenre_details.md) — Get the details for a specific Ticketmaster sub-genre by ID.
- [`get_suggestions`](actions/get_suggestions.md) — Get Discovery API search suggestions across events, venues, and attractions.
- [`get_venue_details`](actions/get_venue_details.md) — Get the details for a specific Ticketmaster venue by ID.
- [`get_venues`](actions/get_venues.md) — Search Discovery API venues by ID, keyword, and location filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Ticketmaster state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Ticketmaster is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=ticketmaster
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Ticketmaster homepage: https://www.ticketmaster.com
