# Trello · `create_board`

Create a Trello board.

- **Service**: `trello`
- **Action**: `create_board`
- **Action id**: `trello.create_board`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "create_board"
```

## Run

```bash
oo connector run "trello" --action "create_board" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Trello state. Confirm the exact payload and intended effect with the user before running.
