# Razorpay · `list_orders`

List Razorpay orders with optional receipt, status-window, and expansion filters.

- **Service**: `razorpay`
- **Action**: `list_orders`
- **Action id**: `razorpay.list_orders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "razorpay" --action "list_orders"
```

## Run

```bash
oo connector run "razorpay" --action "list_orders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
