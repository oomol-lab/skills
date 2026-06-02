# Best Buy · `get_store_details`

Retrieve one Best Buy store by store identifier.

- **Service**: `bestbuy`
- **Action**: `get_store_details`
- **Action id**: `bestbuy.get_store_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bestbuy" --action "get_store_details"
```

## Run

```bash
oo connector run "bestbuy" --action "get_store_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
