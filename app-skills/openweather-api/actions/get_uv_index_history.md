# OpenWeather · `get_uv_index_history`

Return sampled historical UV index points by querying OpenWeather One Call 3.0 timemachine once per day in the requested range, because the legacy UV Index API is retired.

- **Service**: `openweather_api`
- **Action**: `get_uv_index_history`
- **Action id**: `openweather_api.get_uv_index_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_uv_index_history"
```

## Run

```bash
oo connector run "openweather_api" --action "get_uv_index_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
