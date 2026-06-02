# Ninox · `list_tables`

List Ninox tables for one database.

- **Service**: `ninox`
- **Action**: `list_tables`
- **Action id**: `ninox.list_tables`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ninox" --action "list_tables"
```

## Run

```bash
oo connector run "ninox" --action "list_tables" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
