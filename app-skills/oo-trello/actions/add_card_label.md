# Trello · `add_card_label`

Add a Trello label to a card.

- **Service**: `trello`
- **Action**: `add_card_label`
- **Action id**: `trello.add_card_label`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "add_card_label"
```

## Run

```bash
oo connector run "trello" --action "add_card_label" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Trello state. Confirm the exact payload and intended effect with the user before running.
