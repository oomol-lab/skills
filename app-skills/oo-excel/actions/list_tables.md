# Excel · `list_tables`

List workbook tables, optionally restricted to one worksheet.

- **Service**: `excel`
- **Action**: `list_tables`
- **Action id**: `excel.list_tables`
- **Required scopes**: excel.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "list_tables"
```

## Run

```bash
oo connector run "excel" --action "list_tables" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
