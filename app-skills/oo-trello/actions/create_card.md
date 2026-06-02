# Trello · `create_card`

Create a Trello card in a list.

- **Service**: `trello`
- **Action**: `create_card`
- **Action id**: `trello.create_card`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "create_card"
```

## Run

```bash
oo connector run "trello" --action "create_card" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Trello state. Confirm the exact payload and intended effect with the user before running.
