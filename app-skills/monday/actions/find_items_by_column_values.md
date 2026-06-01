# Monday · `find_items_by_column_values`

Find Monday items on a board by matching explicit column values.

- **Service**: `monday`
- **Action**: `find_items_by_column_values`
- **Action id**: `monday.find_items_by_column_values`
- **Required scopes**: boards:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "find_items_by_column_values"
```

## Run

```bash
oo connector run "monday" --action "find_items_by_column_values" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
