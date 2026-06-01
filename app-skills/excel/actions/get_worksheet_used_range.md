# Excel · `get_worksheet_used_range`

Read the used range for one worksheet.

- **Service**: `excel`
- **Action**: `get_worksheet_used_range`
- **Action id**: `excel.get_worksheet_used_range`
- **Required scopes**: excel.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "get_worksheet_used_range"
```

## Run

```bash
oo connector run "excel" --action "get_worksheet_used_range" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
