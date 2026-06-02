# Razorpay · `list_payments`

List Razorpay payments within an optional time window and pagination range.

- **Service**: `razorpay`
- **Action**: `list_payments`
- **Action id**: `razorpay.list_payments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "razorpay" --action "list_payments"
```

## Run

```bash
oo connector run "razorpay" --action "list_payments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
