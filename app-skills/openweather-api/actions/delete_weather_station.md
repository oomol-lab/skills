# OpenWeather · `delete_weather_station`

Delete one OpenWeather weather station by identifier.

- **Service**: `openweather_api`
- **Action**: `delete_weather_station`
- **Action id**: `openweather_api.delete_weather_station`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "delete_weather_station"
```

## Run

```bash
oo connector run "openweather_api" --action "delete_weather_station" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites OpenWeather data. Always confirm the target and get explicit user approval before running.
