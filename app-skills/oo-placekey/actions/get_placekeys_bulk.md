# Placekey · `get_placekeys_bulk`

Look up up to 100 locations in one Placekey bulk request and return the result for each query item.

- **Service**: `placekey`
- **Action**: `get_placekeys_bulk`
- **Action id**: `placekey.get_placekeys_bulk`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "placekey" --action "get_placekeys_bulk"
```

## Run

```bash
oo connector run "placekey" --action "get_placekeys_bulk" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
