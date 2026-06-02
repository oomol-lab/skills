# Baserow · `list_table_fields`

List the field definitions for one Baserow table.

- **Service**: `baserow`
- **Action**: `list_table_fields`
- **Action id**: `baserow.list_table_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "baserow" --action "list_table_fields"
```

## Run

```bash
oo connector run "baserow" --action "list_table_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
