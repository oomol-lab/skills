# Lemon Squeezy · `list_orders`

List Lemon Squeezy orders with optional store, email, or order-number filtering.

- **Service**: `lemon_squeezy`
- **Action**: `list_orders`
- **Action id**: `lemon_squeezy.list_orders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lemon_squeezy" --action "list_orders"
```

## Run

```bash
oo connector run "lemon_squeezy" --action "list_orders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
