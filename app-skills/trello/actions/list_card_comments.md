# Trello · `list_card_comments`

List comment actions on a Trello card.

- **Service**: `trello`
- **Action**: `list_card_comments`
- **Action id**: `trello.list_card_comments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "list_card_comments"
```

## Run

```bash
oo connector run "trello" --action "list_card_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
