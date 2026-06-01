# Trello · `list_card_checklists`

List Trello checklists on a card.

- **Service**: `trello`
- **Action**: `list_card_checklists`
- **Action id**: `trello.list_card_checklists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "list_card_checklists"
```

## Run

```bash
oo connector run "trello" --action "list_card_checklists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
