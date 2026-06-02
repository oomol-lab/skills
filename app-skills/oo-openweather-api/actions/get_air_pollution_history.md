# OpenWeather · `get_air_pollution_history`

Retrieve historical air-pollution data for one latitude and longitude over a time range.

- **Service**: `openweather_api`
- **Action**: `get_air_pollution_history`
- **Action id**: `openweather_api.get_air_pollution_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_air_pollution_history"
```

## Run

```bash
oo connector run "openweather_api" --action "get_air_pollution_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
