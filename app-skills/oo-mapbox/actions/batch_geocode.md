# Mapbox · `batch_geocode`

Submit multiple forward or reverse geocoding queries in one Mapbox batch request.

- **Service**: `mapbox`
- **Action**: `batch_geocode`
- **Action id**: `mapbox.batch_geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mapbox" --action "batch_geocode"
```

## Run

```bash
oo connector run "mapbox" --action "batch_geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
