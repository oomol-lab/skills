# Stripe · `update_price`

Update mutable fields on a Stripe price.

- **Service**: `stripe`
- **Action**: `update_price`
- **Action id**: `stripe.update_price`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "update_price"
```

## Run

```bash
oo connector run "stripe" --action "update_price" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Stripe state. Confirm the exact payload and intended effect with the user before running.
