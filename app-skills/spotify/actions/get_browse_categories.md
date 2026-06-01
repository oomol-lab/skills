# Spotify · `get_browse_categories`

Get Spotify browse categories for a market and locale.

- **Service**: `spotify`
- **Action**: `get_browse_categories`
- **Action id**: `spotify.get_browse_categories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_browse_categories"
```

## Run

```bash
oo connector run "spotify" --action "get_browse_categories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
