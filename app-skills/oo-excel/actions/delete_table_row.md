# Excel · `delete_table_row`

Delete one row from a workbook table by row index.

- **Service**: `excel`
- **Action**: `delete_table_row`
- **Action id**: `excel.delete_table_row`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "delete_table_row"
```

## Run

```bash
oo connector run "excel" --action "delete_table_row" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Excel data. Always confirm the target and get explicit user approval before running.
