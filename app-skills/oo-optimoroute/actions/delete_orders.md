# OptimoRoute · `delete_orders`

Delete one or more OptimoRoute orders by orderNo or id.

- **Service**: `optimoroute`
- **Action**: `delete_orders`
- **Action id**: `optimoroute.delete_orders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "optimoroute" --action "delete_orders"
```

## Run

```bash
oo connector run "optimoroute" --action "delete_orders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites OptimoRoute data. Always confirm the target and get explicit user approval before running.
