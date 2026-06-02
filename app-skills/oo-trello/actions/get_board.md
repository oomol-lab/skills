# Trello · `get_board`

Get a Trello board by ID.

- **Service**: `trello`
- **Action**: `get_board`
- **Action id**: `trello.get_board`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "get_board"
```

## Run

```bash
oo connector run "trello" --action "get_board" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
