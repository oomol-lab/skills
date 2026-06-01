# Trello · `archive_card`

Archive a Trello card.

- **Service**: `trello`
- **Action**: `archive_card`
- **Action id**: `trello.archive_card`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "archive_card"
```

## Run

```bash
oo connector run "trello" --action "archive_card" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
