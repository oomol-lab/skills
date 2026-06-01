# TomTom · `geocode`

Convert an address into geographic search results with the TomTom Geocoding API.

- **Service**: `tomtom`
- **Action**: `geocode`
- **Action id**: `tomtom.geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomtom" --action "geocode"
```

## Run

```bash
oo connector run "tomtom" --action "geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
