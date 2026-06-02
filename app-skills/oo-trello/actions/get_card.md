# Trello · `get_card`

Get a Trello card by ID or short link.

- **Service**: `trello`
- **Action**: `get_card`
- **Action id**: `trello.get_card`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "get_card"
```

## Run

```bash
oo connector run "trello" --action "get_card" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
