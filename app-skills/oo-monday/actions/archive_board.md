# Monday · `archive_board`

Archive a Monday board.

- **Service**: `monday`
- **Action**: `archive_board`
- **Action id**: `monday.archive_board`
- **Required scopes**: boards:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "archive_board"
```

## Run

```bash
oo connector run "monday" --action "archive_board" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
