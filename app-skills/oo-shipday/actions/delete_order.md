# Shipday · `delete_order`

Delete a Shipday delivery order by order ID.

- **Service**: `shipday`
- **Action**: `delete_order`
- **Action id**: `shipday.delete_order`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shipday" --action "delete_order"
```

## Run

```bash
oo connector run "shipday" --action "delete_order" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Shipday data. Always confirm the target and get explicit user approval before running.
