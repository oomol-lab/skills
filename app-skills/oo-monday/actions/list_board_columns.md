# Monday · `list_board_columns`

List the columns for a specific Monday board.

- **Service**: `monday`
- **Action**: `list_board_columns`
- **Action id**: `monday.list_board_columns`
- **Required scopes**: boards:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_board_columns"
```

## Run

```bash
oo connector run "monday" --action "list_board_columns" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
