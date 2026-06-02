# Countdown API · `search_products`

Search eBay products through Countdown API with optional filters.

- **Service**: `countdown_api`
- **Action**: `search_products`
- **Action id**: `countdown_api.search_products`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "countdown_api" --action "search_products"
```

## Run

```bash
oo connector run "countdown_api" --action "search_products" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
