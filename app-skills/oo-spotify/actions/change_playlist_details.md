# Spotify · `change_playlist_details`

Update Spotify playlist metadata such as name, description, visibility, or collaborative state.

- **Service**: `spotify`
- **Action**: `change_playlist_details`
- **Action id**: `spotify.change_playlist_details`
- **Required scopes**: spotify.playlists.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "change_playlist_details"
```

## Run

```bash
oo connector run "spotify" --action "change_playlist_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
