# Ninox · `get_table`

Get Ninox schema metadata for one table.

- **Service**: `ninox`
- **Action**: `get_table`
- **Action id**: `ninox.get_table`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ninox" --action "get_table"
```

## Run

```bash
oo connector run "ninox" --action "get_table" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
