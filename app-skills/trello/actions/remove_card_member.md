# Trello · `remove_card_member`

Remove a Trello member from a card.

- **Service**: `trello`
- **Action**: `remove_card_member`
- **Action id**: `trello.remove_card_member`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "remove_card_member"
```

## Run

```bash
oo connector run "trello" --action "remove_card_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Trello data. Always confirm the target and get explicit user approval before running.
