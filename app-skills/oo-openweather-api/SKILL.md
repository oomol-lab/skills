---
name: oo-openweather-api
description: "OpenWeather (openweathermap.org). Use this skill for ANY OpenWeather request — reading, creating, updating, and deleting data. Whenever a task involves OpenWeather, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "OpenWeather"
  author: "OOMOL"
  version: "1.0.0"
  service: "openweather_api"
  categories: "Maps & Location, Data & Analytics"
  homepage: "https://openweathermap.org"
  icon: "https://static.oomol.com/logo/third-party/OpenWeather%20API.svg"
---

# OpenWeather

Operate **OpenWeather** through your OOMOL-connected account. This skill calls the `openweather_api` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Maps & Location, Data & Analytics. Exposes 21 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected OpenWeather. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "openweather_api" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "openweather_api" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_weather_station`](actions/add_weather_station.md) — Create one OpenWeather weather station under the current account.
- [`delete_weather_station`](actions/delete_weather_station.md) — Delete one OpenWeather weather station by identifier.
- [`get_5_day_forecast`](actions/get_5_day_forecast.md) — Retrieve the OpenWeather 5-day forecast in 3-hour steps for exactly one location selector.
- [`get_air_pollution_current`](actions/get_air_pollution_current.md) — Retrieve the current air-pollution snapshot for one latitude and longitude.
- [`get_air_pollution_forecast`](actions/get_air_pollution_forecast.md) — Retrieve the air-pollution forecast for one latitude and longitude.
- [`get_air_pollution_history`](actions/get_air_pollution_history.md) — Retrieve historical air-pollution data for one latitude and longitude over a time range.
- [`get_circle_city_weather`](actions/get_circle_city_weather.md) — Retrieve current weather for nearby cities around one latitude and longitude by using OpenWeather's compatibility city-search endpoint.
- [`get_current_weather`](actions/get_current_weather.md) — Retrieve the current weather for exactly one OpenWeather location selector.
- [`get_geocoding_by_zip`](actions/get_geocoding_by_zip.md) — Resolve one ZIP or postal code into a named OpenWeather location.
- [`get_geocoding_direct`](actions/get_geocoding_direct.md) — Resolve one place name into one or more OpenWeather geocoding matches.
- [`get_geocoding_reverse`](actions/get_geocoding_reverse.md) — Resolve one latitude and longitude pair into one or more named places.
- [`get_station_measurements`](actions/get_station_measurements.md) — List aggregated historical measurements for one OpenWeather weather station.
- [`get_uv_index`](actions/get_uv_index.md) — Return the current UV index by sampling OpenWeather One Call 3.0, because the legacy UV Index API is retired.
- [`get_uv_index_forecast`](actions/get_uv_index_forecast.md) — Return daily UV forecast points by sampling OpenWeather One Call 3.0, because the legacy UV Index API is retired.
- [`get_uv_index_history`](actions/get_uv_index_history.md) — Return sampled historical UV index points by querying OpenWeather One Call 3.0 timemachine once per day in the requested range, because the legacy UV Index API is retired.
- [`get_weather_map_tile`](actions/get_weather_map_tile.md) — Fetch one OpenWeather weather-map tile and return it as Base64 PNG bytes.
- [`get_weather_station`](actions/get_weather_station.md) — Retrieve one OpenWeather weather station by identifier.
- [`get_weather_triggers`](actions/get_weather_triggers.md) — Compatibility action for the retired OpenWeather Weather Triggers API. Execution always returns a deprecation error.
- [`list_weather_stations`](actions/list_weather_stations.md) — List all OpenWeather weather stations available to the current account.
- [`submit_station_measurements`](actions/submit_station_measurements.md) — Submit one or more measurements for existing OpenWeather weather stations.
- [`update_weather_station`](actions/update_weather_station.md) — Update one existing OpenWeather weather station.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change OpenWeather state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — OpenWeather is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=openweather_api
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- OpenWeather homepage: https://openweathermap.org
