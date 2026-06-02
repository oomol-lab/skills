# GIPHY · `get_random_sticker`

Fetch a random GIPHY sticker, optionally filtered by tag.

- **Service**: `giphy`
- **Action**: `get_random_sticker`
- **Action id**: `giphy.get_random_sticker`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "get_random_sticker"
```

## Run

```bash
oo connector run "giphy" --action "get_random_sticker" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
