# Stripe · `update_product`

Update a Stripe product with common catalog fields.

- **Service**: `stripe`
- **Action**: `update_product`
- **Action id**: `stripe.update_product`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "update_product"
```

## Run

```bash
oo connector run "stripe" --action "update_product" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Stripe state. Confirm the exact payload and intended effect with the user before running.
