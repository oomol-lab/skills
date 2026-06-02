# Trello · `list_board_members`

List Trello members on a board.

- **Service**: `trello`
- **Action**: `list_board_members`
- **Action id**: `trello.list_board_members`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "list_board_members"
```

## Run

```bash
oo connector run "trello" --action "list_board_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
