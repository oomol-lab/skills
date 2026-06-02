# OptimoRoute · `create_or_update_orders`

Create, update, merge, or sync one or more OptimoRoute orders in one request.

- **Service**: `optimoroute`
- **Action**: `create_or_update_orders`
- **Action id**: `optimoroute.create_or_update_orders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "optimoroute" --action "create_or_update_orders"
```

## Run

```bash
oo connector run "optimoroute" --action "create_or_update_orders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OptimoRoute state. Confirm the exact payload and intended effect with the user before running.
