# Spotify · `get_featured_playlists`

Get Spotify featured playlists for a market and locale.

- **Service**: `spotify`
- **Action**: `get_featured_playlists`
- **Action id**: `spotify.get_featured_playlists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_featured_playlists"
```

## Run

```bash
oo connector run "spotify" --action "get_featured_playlists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
