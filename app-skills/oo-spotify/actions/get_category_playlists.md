# Spotify · `get_category_playlists`

Get Spotify playlists for a browse category ID.

- **Service**: `spotify`
- **Action**: `get_category_playlists`
- **Action id**: `spotify.get_category_playlists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_category_playlists"
```

## Run

```bash
oo connector run "spotify" --action "get_category_playlists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
