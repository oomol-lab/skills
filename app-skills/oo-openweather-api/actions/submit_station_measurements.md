# OpenWeather · `submit_station_measurements`

Submit one or more measurements for existing OpenWeather weather stations.

- **Service**: `openweather_api`
- **Action**: `submit_station_measurements`
- **Action id**: `openweather_api.submit_station_measurements`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "submit_station_measurements"
```

## Run

```bash
oo connector run "openweather_api" --action "submit_station_measurements" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OpenWeather state. Confirm the exact payload and intended effect with the user before running.
