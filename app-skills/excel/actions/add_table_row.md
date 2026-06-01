# Excel · `add_table_row`

Add one or more rows to a workbook table.

- **Service**: `excel`
- **Action**: `add_table_row`
- **Action id**: `excel.add_table_row`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "add_table_row"
```

## Run

```bash
oo connector run "excel" --action "add_table_row" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Excel state. Confirm the exact payload and intended effect with the user before running.
