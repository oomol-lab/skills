# Spotify · `search_items`

Search Spotify catalog content across one or more resource types with a keyword query.

- **Service**: `spotify`
- **Action**: `search_items`
- **Action id**: `spotify.search_items`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "search_items"
```

## Run

```bash
oo connector run "spotify" --action "search_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
