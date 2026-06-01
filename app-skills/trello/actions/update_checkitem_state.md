# Trello · `update_checkitem_state`

Update a Trello check item state on a card.

- **Service**: `trello`
- **Action**: `update_checkitem_state`
- **Action id**: `trello.update_checkitem_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "update_checkitem_state"
```

## Run

```bash
oo connector run "trello" --action "update_checkitem_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Trello state. Confirm the exact payload and intended effect with the user before running.
