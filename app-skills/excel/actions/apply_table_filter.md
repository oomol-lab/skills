# Excel · `apply_table_filter`

Apply a Microsoft Graph filter criteria object to one table column.

- **Service**: `excel`
- **Action**: `apply_table_filter`
- **Action id**: `excel.apply_table_filter`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "apply_table_filter"
```

## Run

```bash
oo connector run "excel" --action "apply_table_filter" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
