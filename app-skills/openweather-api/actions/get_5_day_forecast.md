# OpenWeather · `get_5_day_forecast`

Retrieve the OpenWeather 5-day forecast in 3-hour steps for exactly one location selector.

- **Service**: `openweather_api`
- **Action**: `get_5_day_forecast`
- **Action id**: `openweather_api.get_5_day_forecast`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_5_day_forecast"
```

## Run

```bash
oo connector run "openweather_api" --action "get_5_day_forecast" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
