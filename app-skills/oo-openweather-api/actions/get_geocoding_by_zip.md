# OpenWeather · `get_geocoding_by_zip`

Resolve one ZIP or postal code into a named OpenWeather location.

- **Service**: `openweather_api`
- **Action**: `get_geocoding_by_zip`
- **Action id**: `openweather_api.get_geocoding_by_zip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_geocoding_by_zip"
```

## Run

```bash
oo connector run "openweather_api" --action "get_geocoding_by_zip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
