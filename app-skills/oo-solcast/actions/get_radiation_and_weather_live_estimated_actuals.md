# Solcast · `get_radiation_and_weather_live_estimated_actuals`

Get Solcast irradiance and weather live estimated actuals for a latitude and longitude over the past 7 days.

- **Service**: `solcast`
- **Action**: `get_radiation_and_weather_live_estimated_actuals`
- **Action id**: `solcast.get_radiation_and_weather_live_estimated_actuals`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "solcast" --action "get_radiation_and_weather_live_estimated_actuals"
```

## Run

```bash
oo connector run "solcast" --action "get_radiation_and_weather_live_estimated_actuals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
