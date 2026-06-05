# Stripe · `create_price`

Create a Stripe one-time or recurring price for an existing or inline product.

- **Service**: `stripe`
- **Action**: `create_price`
- **Action id**: `stripe.create_price`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "create_price"
```

## Run

```bash
oo connector run "stripe" --action "create_price" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Stripe state. Confirm the exact payload and intended effect with the user before running.
