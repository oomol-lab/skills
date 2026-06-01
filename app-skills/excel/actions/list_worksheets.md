# Excel · `list_worksheets`

List worksheets in a workbook.

- **Service**: `excel`
- **Action**: `list_worksheets`
- **Action id**: `excel.list_worksheets`
- **Required scopes**: excel.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "list_worksheets"
```

## Run

```bash
oo connector run "excel" --action "list_worksheets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
