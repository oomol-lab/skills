# OpenCage · `geocode_geojson`

Return OpenCage geocoding results in GeoJSON FeatureCollection format.

- **Service**: `opencage`
- **Action**: `geocode_geojson`
- **Action id**: `opencage.geocode_geojson`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "opencage" --action "geocode_geojson"
```

## Run

```bash
oo connector run "opencage" --action "geocode_geojson" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
