# Excel · `convert_table_to_range`

Convert a workbook table back into a plain worksheet range.

- **Service**: `excel`
- **Action**: `convert_table_to_range`
- **Action id**: `excel.convert_table_to_range`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "convert_table_to_range"
```

## Run

```bash
oo connector run "excel" --action "convert_table_to_range" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
