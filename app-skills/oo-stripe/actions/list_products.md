# Stripe · `list_products`

List Stripe products with optional active and cursor filters.

- **Service**: `stripe`
- **Action**: `list_products`
- **Action id**: `stripe.list_products`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "list_products"
```

## Run

```bash
oo connector run "stripe" --action "list_products" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
