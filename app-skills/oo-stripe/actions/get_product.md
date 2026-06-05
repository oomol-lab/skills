# Stripe · `get_product`

Retrieve a Stripe product by ID.

- **Service**: `stripe`
- **Action**: `get_product`
- **Action id**: `stripe.get_product`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "get_product"
```

## Run

```bash
oo connector run "stripe" --action "get_product" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
