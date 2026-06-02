# OpenWeather · `get_geocoding_reverse`

Resolve one latitude and longitude pair into one or more named places.

- **Service**: `openweather_api`
- **Action**: `get_geocoding_reverse`
- **Action id**: `openweather_api.get_geocoding_reverse`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openweather_api" --action "get_geocoding_reverse"
```

## Run

```bash
oo connector run "openweather_api" --action "get_geocoding_reverse" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
