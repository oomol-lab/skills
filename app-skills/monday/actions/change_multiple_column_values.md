# Monday · `change_multiple_column_values`

Change multiple Monday column values in one mutation using the official JSON payload shape.

- **Service**: `monday`
- **Action**: `change_multiple_column_values`
- **Action id**: `monday.change_multiple_column_values`
- **Required scopes**: boards:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "change_multiple_column_values"
```

## Run

```bash
oo connector run "monday" --action "change_multiple_column_values" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
