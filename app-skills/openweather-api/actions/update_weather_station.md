# OpenWeather · `update_weather_station`

Update one existing OpenWeather weather station.

- **Service**: `openweather_api`
- **Action**: `update_weather_station`
- **Action id**: `openweather_api.update_weather_station`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "update_weather_station"
```

## Run

```bash
oo connector run "openweather_api" --action "update_weather_station" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OpenWeather state. Confirm the exact payload and intended effect with the user before running.
