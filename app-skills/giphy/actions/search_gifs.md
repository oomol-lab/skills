# GIPHY · `search_gifs`

Search GIPHY GIFs by query text.

- **Service**: `giphy`
- **Action**: `search_gifs`
- **Action id**: `giphy.search_gifs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "search_gifs"
```

## Run

```bash
oo connector run "giphy" --action "search_gifs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
