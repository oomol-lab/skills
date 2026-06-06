# Shipday · `get_order_progress`

Retrieve real-time delivery progress and ETA for a Shipday order.

- **Service**: `shipday`
- **Action**: `get_order_progress`
- **Action id**: `shipday.get_order_progress`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shipday" --action "get_order_progress"
```

## Run

```bash
oo connector run "shipday" --action "get_order_progress" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
