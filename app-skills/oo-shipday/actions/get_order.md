# Shipday · `get_order`

Retrieve one Shipday delivery order by order number.

- **Service**: `shipday`
- **Action**: `get_order`
- **Action id**: `shipday.get_order`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shipday" --action "get_order"
```

## Run

```bash
oo connector run "shipday" --action "get_order" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
