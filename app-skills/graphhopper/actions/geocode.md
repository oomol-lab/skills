# GraphHopper · `geocode`

Convert text to coordinates or coordinates to place candidates with the GraphHopper Geocoding API.

- **Service**: `graphhopper`
- **Action**: `geocode`
- **Action id**: `graphhopper.geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "graphhopper" --action "geocode"
```

## Run

```bash
oo connector run "graphhopper" --action "geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
