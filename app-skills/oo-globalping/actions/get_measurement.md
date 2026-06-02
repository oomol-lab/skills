# Globalping · `get_measurement`

Get the current status and results of a Globalping measurement by ID.

- **Service**: `globalping`
- **Action**: `get_measurement`
- **Action id**: `globalping.get_measurement`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "globalping" --action "get_measurement"
```

## Run

```bash
oo connector run "globalping" --action "get_measurement" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
