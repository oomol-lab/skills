# GIPHY · `get_random_gif`

Fetch a random GIPHY GIF, optionally filtered by tag.

- **Service**: `giphy`
- **Action**: `get_random_gif`
- **Action id**: `giphy.get_random_gif`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "get_random_gif"
```

## Run

```bash
oo connector run "giphy" --action "get_random_gif" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
