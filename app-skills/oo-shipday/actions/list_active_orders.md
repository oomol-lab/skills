# Shipday · `list_active_orders`

Retrieve active delivery orders from Shipday.

- **Service**: `shipday`
- **Action**: `list_active_orders`
- **Action id**: `shipday.list_active_orders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shipday" --action "list_active_orders"
```

## Run

```bash
oo connector run "shipday" --action "list_active_orders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
