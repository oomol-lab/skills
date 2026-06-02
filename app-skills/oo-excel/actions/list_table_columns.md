# Excel · `list_table_columns`

List columns for one workbook table.

- **Service**: `excel`
- **Action**: `list_table_columns`
- **Action id**: `excel.list_table_columns`
- **Required scopes**: excel.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "list_table_columns"
```

## Run

```bash
oo connector run "excel" --action "list_table_columns" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
