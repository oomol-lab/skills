# Excel · `get_workbook`

Read workbook metadata and optionally expand related workbook resources.

- **Service**: `excel`
- **Action**: `get_workbook`
- **Action id**: `excel.get_workbook`
- **Required scopes**: excel.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "get_workbook"
```

## Run

```bash
oo connector run "excel" --action "get_workbook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
