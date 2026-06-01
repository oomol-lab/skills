# API Ninjas · `weather_forecast`

Fetch forecast weather readings for a set of coordinates.

- **Service**: `api_ninjas`
- **Action**: `weather_forecast`
- **Action id**: `api_ninjas.weather_forecast`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_ninjas" --action "weather_forecast"
```

## Run

```bash
oo connector run "api_ninjas" --action "weather_forecast" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
