# Excel · `list_table_rows`

List rows for one workbook table.

- **Service**: `excel`
- **Action**: `list_table_rows`
- **Action id**: `excel.list_table_rows`
- **Required scopes**: excel.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "list_table_rows"
```

## Run

```bash
oo connector run "excel" --action "list_table_rows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
