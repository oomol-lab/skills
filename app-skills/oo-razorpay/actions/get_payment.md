# Razorpay · `get_payment`

Fetch one Razorpay payment by its payment identifier.

- **Service**: `razorpay`
- **Action**: `get_payment`
- **Action id**: `razorpay.get_payment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "razorpay" --action "get_payment"
```

## Run

```bash
oo connector run "razorpay" --action "get_payment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
