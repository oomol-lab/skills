# OpenWeather · `get_air_pollution_forecast`

Retrieve the air-pollution forecast for one latitude and longitude.

- **Service**: `openweather_api`
- **Action**: `get_air_pollution_forecast`
- **Action id**: `openweather_api.get_air_pollution_forecast`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_air_pollution_forecast"
```

## Run

```bash
oo connector run "openweather_api" --action "get_air_pollution_forecast" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
