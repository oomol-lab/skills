# OpenWeather · `get_weather_map_tile`

Fetch one OpenWeather weather-map tile and return it as Base64 PNG bytes.

- **Service**: `openweather_api`
- **Action**: `get_weather_map_tile`
- **Action id**: `openweather_api.get_weather_map_tile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_weather_map_tile"
```

## Run

```bash
oo connector run "openweather_api" --action "get_weather_map_tile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
