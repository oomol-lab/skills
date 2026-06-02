---
name: oo-tencent-maps
description: "Tencent Maps (lbs.qq.com). Use this skill for ANY Tencent Maps request — searching and reading data. Whenever a task involves Tencent Maps, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Tencent Maps"
  author: "OOMOL"
  version: "1.0.0"
  service: "tencent_maps"
  categories: "Maps & Location"
  homepage: "https://lbs.qq.com"
  icon: "https://static.oomol.com/logo/third-party/tencent_maps.png"
---

# Tencent Maps

Operate **Tencent Maps** through your OOMOL-connected account. This skill calls the `tencent_maps` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Maps & Location. Exposes 15 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Tencent Maps. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "tencent_maps" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "tencent_maps" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`distance_matrix`](actions/distance_matrix.md) — Compute a Tencent Maps distance matrix for multiple origins and destinations.
- [`district_search`](actions/district_search.md) — List, search, or fetch child Tencent Maps administrative districts.
- [`geocode`](actions/geocode.md) — Convert an address into Tencent Maps coordinates and structured address parts.
- [`get_place_detail`](actions/get_place_detail.md) — Fetch Tencent Maps place details by place id.
- [`input_tips`](actions/input_tips.md) — Fetch Tencent Maps place suggestion tips for a partial keyword.
- [`ip_locate`](actions/ip_locate.md) — Locate an IP address with Tencent Maps IP geolocation.
- [`reverse_geocode`](actions/reverse_geocode.md) — Convert Tencent Maps coordinates into an address and nearby place context.
- [`route_bicycling`](actions/route_bicycling.md) — Plan a Tencent Maps bicycling route.
- [`route_driving`](actions/route_driving.md) — Plan a Tencent Maps driving route.
- [`route_transit`](actions/route_transit.md) — Plan a Tencent Maps transit route.
- [`route_walking`](actions/route_walking.md) — Plan a Tencent Maps walking route.
- [`search_places`](actions/search_places.md) — Search Tencent Maps places within a region boundary.
- [`search_places_around`](actions/search_places_around.md) — Search Tencent Maps places around a nearby center point.
- [`search_places_polygon`](actions/search_places_polygon.md) — Search Tencent Maps places inside a polygon boundary.
- [`weather`](actions/weather.md) — Fetch Tencent Maps realtime or forecast weather for an adcode or coordinate.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Tencent Maps state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Tencent Maps is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=tencent_maps
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Tencent Maps homepage: https://lbs.qq.com
