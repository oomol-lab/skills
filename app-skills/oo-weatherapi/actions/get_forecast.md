# WeatherAPI · `get_forecast`

Get weather forecast data for a WeatherAPI location query.

- **Service**: `weatherapi`
- **Action**: `get_forecast`
- **Action id**: `weatherapi.get_forecast`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "weatherapi" --action "get_forecast"
```

## Run

```bash
oo connector run "weatherapi" --action "get_forecast" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
