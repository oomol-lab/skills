# Best Buy · `get_stores`

List Best Buy stores with optional geographic and attribute filters.

- **Service**: `bestbuy`
- **Action**: `get_stores`
- **Action id**: `bestbuy.get_stores`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bestbuy" --action "get_stores"
```

## Run

```bash
oo connector run "bestbuy" --action "get_stores" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
