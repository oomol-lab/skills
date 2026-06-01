# Excel · `create_workbook`

Create a new .xlsx workbook file and optionally populate worksheets and data.

- **Service**: `excel`
- **Action**: `create_workbook`
- **Action id**: `excel.create_workbook`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "create_workbook"
```

## Run

```bash
oo connector run "excel" --action "create_workbook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Excel state. Confirm the exact payload and intended effect with the user before running.
