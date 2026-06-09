# Shipday · `create_order`

Insert a Shipday delivery order.

- **Service**: `shipday`
- **Action**: `create_order`
- **Action id**: `shipday.create_order`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shipday" --action "create_order"
```

## Run

```bash
oo connector run "shipday" --action "create_order" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Shipday state. Confirm the exact payload and intended effect with the user before running.
