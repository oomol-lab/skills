# Monday · `change_simple_column_value`

Change a Monday column value using the official simple string mutation.

- **Service**: `monday`
- **Action**: `change_simple_column_value`
- **Action id**: `monday.change_simple_column_value`
- **Required scopes**: boards:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "change_simple_column_value"
```

## Run

```bash
oo connector run "monday" --action "change_simple_column_value" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
