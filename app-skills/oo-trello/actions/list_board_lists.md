# Trello · `list_board_lists`

List Trello lists on a board.

- **Service**: `trello`
- **Action**: `list_board_lists`
- **Action id**: `trello.list_board_lists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "list_board_lists"
```

## Run

```bash
oo connector run "trello" --action "list_board_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
