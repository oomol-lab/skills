# OpenWeather · `get_current_weather`

Retrieve the current weather for exactly one OpenWeather location selector.

- **Service**: `openweather_api`
- **Action**: `get_current_weather`
- **Action id**: `openweather_api.get_current_weather`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_current_weather"
```

## Run

```bash
oo connector run "openweather_api" --action "get_current_weather" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
