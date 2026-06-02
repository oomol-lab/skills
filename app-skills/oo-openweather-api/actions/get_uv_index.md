# OpenWeather · `get_uv_index`

Return the current UV index by sampling OpenWeather One Call 3.0, because the legacy UV Index API is retired.

- **Service**: `openweather_api`
- **Action**: `get_uv_index`
- **Action id**: `openweather_api.get_uv_index`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_uv_index"
```

## Run

```bash
oo connector run "openweather_api" --action "get_uv_index" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
