# Tencent Maps · `distance_matrix`

Compute a Tencent Maps distance matrix for multiple origins and destinations.

- **Service**: `tencent_maps`
- **Action**: `distance_matrix`
- **Action id**: `tencent_maps.distance_matrix`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "distance_matrix"
```

## Run

```bash
oo connector run "tencent_maps" --action "distance_matrix" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
