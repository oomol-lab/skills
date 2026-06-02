# GIPHY · `search_stickers`

Search GIPHY stickers by query text.

- **Service**: `giphy`
- **Action**: `search_stickers`
- **Action id**: `giphy.search_stickers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "search_stickers"
```

## Run

```bash
oo connector run "giphy" --action "search_stickers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
