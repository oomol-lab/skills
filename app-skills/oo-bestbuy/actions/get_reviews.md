# Best Buy · `get_reviews`

List Best Buy product reviews with optional SKU, reviewer, and rating filters.

- **Service**: `bestbuy`
- **Action**: `get_reviews`
- **Action id**: `bestbuy.get_reviews`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bestbuy" --action "get_reviews"
```

## Run

```bash
oo connector run "bestbuy" --action "get_reviews" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
