# Mapbox · `reverse_geocode`

Convert a coordinate pair into place features with Mapbox Geocoding v6.

- **Service**: `mapbox`
- **Action**: `reverse_geocode`
- **Action id**: `mapbox.reverse_geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mapbox" --action "reverse_geocode"
```

## Run

```bash
oo connector run "mapbox" --action "reverse_geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
