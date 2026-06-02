# OpenWeather · `get_uv_index_forecast`

Return daily UV forecast points by sampling OpenWeather One Call 3.0, because the legacy UV Index API is retired.

- **Service**: `openweather_api`
- **Action**: `get_uv_index_forecast`
- **Action id**: `openweather_api.get_uv_index_forecast`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_uv_index_forecast"
```

## Run

```bash
oo connector run "openweather_api" --action "get_uv_index_forecast" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
