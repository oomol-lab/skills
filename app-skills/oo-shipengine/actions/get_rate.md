# ShipEngine · `get_rate`

Retrieve a previously queried ShipEngine rate by ID.

- **Service**: `shipengine`
- **Action**: `get_rate`
- **Action id**: `shipengine.get_rate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shipengine" --action "get_rate"
```

## Run

```bash
oo connector run "shipengine" --action "get_rate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
