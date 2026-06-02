# Ninox · `list_records`

List records from one Ninox table.

- **Service**: `ninox`
- **Action**: `list_records`
- **Action id**: `ninox.list_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ninox" --action "list_records"
```

## Run

```bash
oo connector run "ninox" --action "list_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
