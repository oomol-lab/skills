# Mapbox · `get_directions`

Compute a route between multiple coordinates with the Mapbox Directions API.

- **Service**: `mapbox`
- **Action**: `get_directions`
- **Action id**: `mapbox.get_directions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mapbox" --action "get_directions"
```

## Run

```bash
oo connector run "mapbox" --action "get_directions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
