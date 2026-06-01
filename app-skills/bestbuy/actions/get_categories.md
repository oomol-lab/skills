# Best Buy · `get_categories`

List Best Buy categories with optional identifier or name filters.

- **Service**: `bestbuy`
- **Action**: `get_categories`
- **Action id**: `bestbuy.get_categories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bestbuy" --action "get_categories"
```

## Run

```bash
oo connector run "bestbuy" --action "get_categories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
