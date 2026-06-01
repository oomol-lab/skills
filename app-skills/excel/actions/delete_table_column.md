# Excel · `delete_table_column`

Delete one column from a workbook table.

- **Service**: `excel`
- **Action**: `delete_table_column`
- **Action id**: `excel.delete_table_column`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "delete_table_column"
```

## Run

```bash
oo connector run "excel" --action "delete_table_column" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Excel data. Always confirm the target and get explicit user approval before running.
