# OpenWeather · `get_geocoding_direct`

Resolve one place name into one or more OpenWeather geocoding matches.

- **Service**: `openweather_api`
- **Action**: `get_geocoding_direct`
- **Action id**: `openweather_api.get_geocoding_direct`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_geocoding_direct"
```

## Run

```bash
oo connector run "openweather_api" --action "get_geocoding_direct" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
