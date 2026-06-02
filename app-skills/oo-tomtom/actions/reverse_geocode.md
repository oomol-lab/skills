# TomTom · `reverse_geocode`

Convert a coordinate into human-readable address candidates with the TomTom Reverse Geocoding API.

- **Service**: `tomtom`
- **Action**: `reverse_geocode`
- **Action id**: `tomtom.reverse_geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomtom" --action "reverse_geocode"
```

## Run

```bash
oo connector run "tomtom" --action "reverse_geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
