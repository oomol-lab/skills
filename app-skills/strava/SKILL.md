---
name: strava
description: "Strava (strava.com). Use this skill for ANY Strava request — reading, creating, and updating data. Whenever a task involves Strava, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Strava"
  author: "OOMOL"
  version: "1.0.0"
  service: "strava"
  categories: "Social"
  homepage: "https://www.strava.com"
  icon: "https://static.oomol.com/logo/third-party/Strava.svg"
---

# Strava

Operate **Strava** through your OOMOL-connected account. This skill calls the `strava` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Social. Exposes 34 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Strava. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "strava" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "strava" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_activity`](actions/create_activity.md) — Create a manually entered Strava activity.
- [`explore_segments`](actions/explore_segments.md) — Explore eligible Strava segments within a given bounding box.
- [`export_route_gpx`](actions/export_route_gpx.md) — Export the GPX content of a specified Strava route.
- [`export_route_tcx`](actions/export_route_tcx.md) — Export TCX content for a specified Strava route.
- [`get_activity`](actions/get_activity.md) — Get activity details for current Strava athletes by ID.
- [`get_activity_streams`](actions/get_activity_streams.md) — Get streaming data for the specified Strava activity.
- [`get_activity_zones`](actions/get_activity_zones.md) — Gets the training partition results for the specified Strava activity.
- [`get_athlete_stats`](actions/get_athlete_stats.md) — Get a summary of statistics for a specified Strava athlete.
- [`get_authenticated_athlete`](actions/get_authenticated_athlete.md) — Get currently licensed Strava athlete profiles.
- [`get_club`](actions/get_club.md) — Get Strava club details by ID.
- [`get_equipment`](actions/get_equipment.md) — Get Strava gear details by ID.
- [`get_route`](actions/get_route.md) — Get Strava route details by ID.
- [`get_route_streams`](actions/get_route_streams.md) — Get flow data for a specified Strava route.
- [`get_segment`](actions/get_segment.md) — Get Strava segment details by ID.
- [`get_segment_effort`](actions/get_segment_effort.md) — Get Strava segment performance details by ID.
- [`get_segment_effort_streams`](actions/get_segment_effort_streams.md) — Get streaming data for a specified Strava segment score.
- [`get_segment_streams`](actions/get_segment_streams.md) — Get flow data for a specified Strava segment.
- [`get_upload`](actions/get_upload.md) — Query the status of Strava activity upload tasks.
- [`get_zones`](actions/get_zones.md) — Get the current Strava athlete's training partition.
- [`list_activity_comments`](actions/list_activity_comments.md) — Lists comments for the specified Strava activity.
- [`list_activity_kudoers`](actions/list_activity_kudoers.md) — List athletes who have liked the specified Strava activity.
- [`list_activity_laps`](actions/list_activity_laps.md) — Lists the segments for a given Strava activity.
- [`list_athlete_activities`](actions/list_athlete_activities.md) — Paginated list of current Strava athletes' activities.
- [`list_athlete_clubs`](actions/list_athlete_clubs.md) — Lists the clubs current Strava athletes belong to.
- [`list_athlete_routes`](actions/list_athlete_routes.md) — Paginated list of routes for a given Strava athlete.
- [`list_club_activities`](actions/list_club_activities.md) — Paginated list of recent activity for a given Strava club.
- [`list_club_administrators`](actions/list_club_administrators.md) — Paginated list of Strava club admins.
- [`list_club_members`](actions/list_club_members.md) — Paginated list of Strava club members.
- [`list_segment_efforts`](actions/list_segment_efforts.md) — List Strava segment scores by segment ID.
- [`list_starred_segments`](actions/list_starred_segments.md) — Paginated list of current Strava athlete collections.
- [`star_segment`](actions/star_segment.md) — Favorite or unfavorite a specific Strava segment.
- [`update_activity`](actions/update_activity.md) — Update activity information for current Strava athletes.
- [`update_athlete`](actions/update_athlete.md) — Update current Strava athlete's weight.
- [`upload_activity`](actions/upload_activity.md) — Upload GPX, TCX or FIT files to Strava to generate events.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Strava state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Strava is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=strava
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Strava homepage: https://www.strava.com
