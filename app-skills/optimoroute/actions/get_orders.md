# OptimoRoute · `get_orders`

Retrieve one or more OptimoRoute orders by orderNo or id.

- **Service**: `optimoroute`
- **Action**: `get_orders`
- **Action id**: `optimoroute.get_orders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "optimoroute" --action "get_orders"
```

## Run

```bash
oo connector run "optimoroute" --action "get_orders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
