# Excel · `get_table_column`

Read one workbook table column by column name or column ID.

- **Service**: `excel`
- **Action**: `get_table_column`
- **Action id**: `excel.get_table_column`
- **Required scopes**: excel.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "get_table_column"
```

## Run

```bash
oo connector run "excel" --action "get_table_column" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
