# ShipEngine · `parse_address`

Parse unstructured text into a structured ShipEngine address.

- **Service**: `shipengine`
- **Action**: `parse_address`
- **Action id**: `shipengine.parse_address`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shipengine" --action "parse_address"
```

## Run

```bash
oo connector run "shipengine" --action "parse_address" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
