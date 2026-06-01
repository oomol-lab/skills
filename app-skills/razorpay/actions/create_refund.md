# Razorpay · `create_refund`

Create a Razorpay refund for a payment, with optional amount, speed, and notes.

- **Service**: `razorpay`
- **Action**: `create_refund`
- **Action id**: `razorpay.create_refund`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "razorpay" --action "create_refund"
```

## Run

```bash
oo connector run "razorpay" --action "create_refund" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Razorpay state. Confirm the exact payload and intended effect with the user before running.
