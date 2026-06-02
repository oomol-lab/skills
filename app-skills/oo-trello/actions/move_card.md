# Trello · `move_card`

Move a Trello card to another list.

- **Service**: `trello`
- **Action**: `move_card`
- **Action id**: `trello.move_card`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "move_card"
```

## Run

```bash
oo connector run "trello" --action "move_card" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Trello state. Confirm the exact payload and intended effect with the user before running.
