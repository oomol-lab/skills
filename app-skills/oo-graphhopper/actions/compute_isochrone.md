# GraphHopper · `compute_isochrone`

Compute GeoJSON isochrone polygons around a coordinate with the GraphHopper Isochrone API.

- **Service**: `graphhopper`
- **Action**: `compute_isochrone`
- **Action id**: `graphhopper.compute_isochrone`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "graphhopper" --action "compute_isochrone"
```

## Run

```bash
oo connector run "graphhopper" --action "compute_isochrone" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
