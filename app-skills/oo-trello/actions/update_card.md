# Trello · `update_card`

Update a Trello card by ID or short link.

- **Service**: `trello`
- **Action**: `update_card`
- **Action id**: `trello.update_card`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "update_card"
```

## Run

```bash
oo connector run "trello" --action "update_card" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Trello state. Confirm the exact payload and intended effect with the user before running.
