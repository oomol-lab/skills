# Razorpay · `create_order`

Create a Razorpay order for an amount, currency, and optional receipt metadata.

- **Service**: `razorpay`
- **Action**: `create_order`
- **Action id**: `razorpay.create_order`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "razorpay" --action "create_order"
```

## Run

```bash
oo connector run "razorpay" --action "create_order" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Razorpay state. Confirm the exact payload and intended effect with the user before running.
