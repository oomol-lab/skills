# Stripe · `delete_product`

Delete a Stripe product by ID.

- **Service**: `stripe`
- **Action**: `delete_product`
- **Action id**: `stripe.delete_product`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "delete_product"
```

## Run

```bash
oo connector run "stripe" --action "delete_product" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Stripe data. Always confirm the target and get explicit user approval before running.
