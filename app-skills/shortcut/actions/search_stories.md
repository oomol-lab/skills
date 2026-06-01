# Shortcut · `search_stories`

Search Shortcut stories with the official search endpoint and stable pagination.

- **Service**: `shortcut`
- **Action**: `search_stories`
- **Action id**: `shortcut.search_stories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortcut" --action "search_stories"
```

## Run

```bash
oo connector run "shortcut" --action "search_stories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
