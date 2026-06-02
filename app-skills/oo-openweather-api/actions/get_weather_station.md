# OpenWeather · `get_weather_station`

Retrieve one OpenWeather weather station by identifier.

- **Service**: `openweather_api`
- **Action**: `get_weather_station`
- **Action id**: `openweather_api.get_weather_station`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_weather_station"
```

## Run

```bash
oo connector run "openweather_api" --action "get_weather_station" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
