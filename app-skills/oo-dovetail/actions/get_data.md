# Dovetail · `get_data`

Get one Dovetail data record by identifier.

- **Service**: `dovetail`
- **Action**: `get_data`
- **Action id**: `dovetail.get_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dovetail" --action "get_data"
```

## Run

```bash
oo connector run "dovetail" --action "get_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
