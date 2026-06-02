# Razorpay · `get_order`

Fetch one Razorpay order by its order identifier.

- **Service**: `razorpay`
- **Action**: `get_order`
- **Action id**: `razorpay.get_order`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "razorpay" --action "get_order"
```

## Run

```bash
oo connector run "razorpay" --action "get_order" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
