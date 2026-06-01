# Trello · `create_list`

Create a Trello list on a board.

- **Service**: `trello`
- **Action**: `create_list`
- **Action id**: `trello.create_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "create_list"
```

## Run

```bash
oo connector run "trello" --action "create_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Trello state. Confirm the exact payload and intended effect with the user before running.
