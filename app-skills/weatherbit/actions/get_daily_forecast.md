# Weatherbit · `get_daily_forecast`

Get daily weather forecasts from Weatherbit for a location.

- **Service**: `weatherbit`
- **Action**: `get_daily_forecast`
- **Action id**: `weatherbit.get_daily_forecast`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "weatherbit" --action "get_daily_forecast"
```

## Run

```bash
oo connector run "weatherbit" --action "get_daily_forecast" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
