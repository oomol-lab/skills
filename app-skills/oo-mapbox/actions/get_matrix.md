# Mapbox · `get_matrix`

Compute a travel time or distance matrix with the Mapbox Matrix API.

- **Service**: `mapbox`
- **Action**: `get_matrix`
- **Action id**: `mapbox.get_matrix`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mapbox" --action "get_matrix"
```

## Run

```bash
oo connector run "mapbox" --action "get_matrix" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
