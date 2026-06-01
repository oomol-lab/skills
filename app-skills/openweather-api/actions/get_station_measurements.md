# OpenWeather · `get_station_measurements`

List aggregated historical measurements for one OpenWeather weather station.

- **Service**: `openweather_api`
- **Action**: `get_station_measurements`
- **Action id**: `openweather_api.get_station_measurements`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_station_measurements"
```

## Run

```bash
oo connector run "openweather_api" --action "get_station_measurements" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
