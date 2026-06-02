# Trello · `create_checklist`

Create a Trello checklist on a card.

- **Service**: `trello`
- **Action**: `create_checklist`
- **Action id**: `trello.create_checklist`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "create_checklist"
```

## Run

```bash
oo connector run "trello" --action "create_checklist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Trello state. Confirm the exact payload and intended effect with the user before running.
