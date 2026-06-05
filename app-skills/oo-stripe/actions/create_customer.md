# Stripe · `create_customer`

Create a Stripe customer with common profile and metadata fields.

- **Service**: `stripe`
- **Action**: `create_customer`
- **Action id**: `stripe.create_customer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "create_customer"
```

## Run

```bash
oo connector run "stripe" --action "create_customer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Stripe state. Confirm the exact payload and intended effect with the user before running.
