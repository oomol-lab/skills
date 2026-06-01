# GIPHY · `list_trending_gifs`

List trending GIPHY GIFs.

- **Service**: `giphy`
- **Action**: `list_trending_gifs`
- **Action id**: `giphy.list_trending_gifs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "list_trending_gifs"
```

## Run

```bash
oo connector run "giphy" --action "list_trending_gifs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
