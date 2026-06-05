# Stripe · `search_products`

Search Stripe products with Stripe's search query syntax.

- **Service**: `stripe`
- **Action**: `search_products`
- **Action id**: `stripe.search_products`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "search_products"
```

## Run

```bash
oo connector run "stripe" --action "search_products" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
