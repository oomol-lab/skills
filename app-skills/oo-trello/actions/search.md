# Trello · `search`

Search Trello cards, boards, members, and organizations.

- **Service**: `trello`
- **Action**: `search`
- **Action id**: `trello.search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "search"
```

## Run

```bash
oo connector run "trello" --action "search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
