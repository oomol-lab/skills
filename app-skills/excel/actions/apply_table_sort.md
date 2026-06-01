# Excel · `apply_table_sort`

Apply a Microsoft Graph sort definition to one workbook table.

- **Service**: `excel`
- **Action**: `apply_table_sort`
- **Action id**: `excel.apply_table_sort`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "apply_table_sort"
```

## Run

```bash
oo connector run "excel" --action "apply_table_sort" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
