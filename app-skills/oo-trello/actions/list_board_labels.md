# Trello · `list_board_labels`

List Trello labels on a board.

- **Service**: `trello`
- **Action**: `list_board_labels`
- **Action id**: `trello.list_board_labels`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "list_board_labels"
```

## Run

```bash
oo connector run "trello" --action "list_board_labels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
