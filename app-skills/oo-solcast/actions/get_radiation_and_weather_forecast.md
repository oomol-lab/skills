# Solcast · `get_radiation_and_weather_forecast`

Get Solcast irradiance and weather forecasts for a latitude and longitude up to 14 days ahead.

- **Service**: `solcast`
- **Action**: `get_radiation_and_weather_forecast`
- **Action id**: `solcast.get_radiation_and_weather_forecast`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "solcast" --action "get_radiation_and_weather_forecast"
```

## Run

```bash
oo connector run "solcast" --action "get_radiation_and_weather_forecast" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
