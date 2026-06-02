# GraphHopper · `compute_matrix`

Compute a synchronous travel time, distance, or weight matrix with the GraphHopper Matrix API.

- **Service**: `graphhopper`
- **Action**: `compute_matrix`
- **Action id**: `graphhopper.compute_matrix`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "graphhopper" --action "compute_matrix"
```

## Run

```bash
oo connector run "graphhopper" --action "compute_matrix" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
