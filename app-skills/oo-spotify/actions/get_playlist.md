# Spotify · `get_playlist`

Get metadata for a Spotify playlist by its playlist ID.

- **Service**: `spotify`
- **Action**: `get_playlist`
- **Action id**: `spotify.get_playlist`
- **Required scopes**: spotify.playlists.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_playlist"
```

## Run

```bash
oo connector run "spotify" --action "get_playlist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
