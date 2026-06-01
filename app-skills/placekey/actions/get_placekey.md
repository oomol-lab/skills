# Placekey · `get_placekey`

Look up a single location with Placekey and return its Placekey identifier plus optional enrichment fields.

- **Service**: `placekey`
- **Action**: `get_placekey`
- **Action id**: `placekey.get_placekey`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "placekey" --action "get_placekey"
```

## Run

```bash
oo connector run "placekey" --action "get_placekey" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
