# OpenWeather · `get_weather_triggers`

Compatibility action for the retired OpenWeather Weather Triggers API. Execution always returns a deprecation error.

- **Service**: `openweather_api`
- **Action**: `get_weather_triggers`
- **Action id**: `openweather_api.get_weather_triggers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_weather_triggers"
```

## Run

```bash
oo connector run "openweather_api" --action "get_weather_triggers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
