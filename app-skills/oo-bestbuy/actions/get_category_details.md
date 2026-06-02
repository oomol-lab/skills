# Best Buy · `get_category_details`

Retrieve one Best Buy category by identifier.

- **Service**: `bestbuy`
- **Action**: `get_category_details`
- **Action id**: `bestbuy.get_category_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bestbuy" --action "get_category_details"
```

## Run

```bash
oo connector run "bestbuy" --action "get_category_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
