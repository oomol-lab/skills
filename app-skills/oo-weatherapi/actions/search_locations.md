# WeatherAPI · `search_locations`

Search locations supported by WeatherAPI.

- **Service**: `weatherapi`
- **Action**: `search_locations`
- **Action id**: `weatherapi.search_locations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "weatherapi" --action "search_locations"
```

## Run

```bash
oo connector run "weatherapi" --action "search_locations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
