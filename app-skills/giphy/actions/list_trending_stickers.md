# GIPHY · `list_trending_stickers`

List trending GIPHY stickers.

- **Service**: `giphy`
- **Action**: `list_trending_stickers`
- **Action id**: `giphy.list_trending_stickers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "list_trending_stickers"
```

## Run

```bash
oo connector run "giphy" --action "list_trending_stickers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
