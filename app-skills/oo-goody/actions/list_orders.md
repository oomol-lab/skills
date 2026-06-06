# Goody · `list_orders`

List Goody orders, optionally filtered by creation timestamp.

- **Service**: `goody`
- **Action**: `list_orders`
- **Action id**: `goody.list_orders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "goody" --action "list_orders"
```

## Run

```bash
oo connector run "goody" --action "list_orders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
