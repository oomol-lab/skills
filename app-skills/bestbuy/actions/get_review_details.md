# Best Buy · `get_review_details`

Retrieve one Best Buy review by identifier.

- **Service**: `bestbuy`
- **Action**: `get_review_details`
- **Action id**: `bestbuy.get_review_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bestbuy" --action "get_review_details"
```

## Run

```bash
oo connector run "bestbuy" --action "get_review_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
