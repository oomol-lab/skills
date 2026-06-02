# OpenWeather · `list_weather_stations`

List all OpenWeather weather stations available to the current account.

- **Service**: `openweather_api`
- **Action**: `list_weather_stations`
- **Action id**: `openweather_api.list_weather_stations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "list_weather_stations"
```

## Run

```bash
oo connector run "openweather_api" --action "list_weather_stations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
