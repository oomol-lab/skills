# Spotify · `get_browse_category`

Get a Spotify browse category by category ID.

- **Service**: `spotify`
- **Action**: `get_browse_category`
- **Action id**: `spotify.get_browse_category`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_browse_category"
```

## Run

```bash
oo connector run "spotify" --action "get_browse_category" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
