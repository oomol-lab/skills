# Excel · `clear_table_filter`

Clear the current Microsoft Graph filter on one table column.

- **Service**: `excel`
- **Action**: `clear_table_filter`
- **Action id**: `excel.clear_table_filter`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "clear_table_filter"
```

## Run

```bash
oo connector run "excel" --action "clear_table_filter" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Excel data. Always confirm the target and get explicit user approval before running.
