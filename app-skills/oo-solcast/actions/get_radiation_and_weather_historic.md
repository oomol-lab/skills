# Solcast · `get_radiation_and_weather_historic`

Get Solcast irradiance and weather historical estimated actuals for a latitude and longitude from 2007 through 7 days ago.

- **Service**: `solcast`
- **Action**: `get_radiation_and_weather_historic`
- **Action id**: `solcast.get_radiation_and_weather_historic`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "solcast" --action "get_radiation_and_weather_historic"
```

## Run

```bash
oo connector run "solcast" --action "get_radiation_and_weather_historic" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
