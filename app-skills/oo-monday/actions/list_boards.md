# Monday · `list_boards`

List Monday boards with official pagination and board-level filters.

- **Service**: `monday`
- **Action**: `list_boards`
- **Action id**: `monday.list_boards`
- **Required scopes**: boards:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_boards"
```

## Run

```bash
oo connector run "monday" --action "list_boards" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
