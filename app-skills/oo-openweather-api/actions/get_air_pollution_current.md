# OpenWeather · `get_air_pollution_current`

Retrieve the current air-pollution snapshot for one latitude and longitude.

- **Service**: `openweather_api`
- **Action**: `get_air_pollution_current`
- **Action id**: `openweather_api.get_air_pollution_current`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_air_pollution_current"
```

## Run

```bash
oo connector run "openweather_api" --action "get_air_pollution_current" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
