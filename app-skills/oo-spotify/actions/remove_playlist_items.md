# Spotify · `remove_playlist_items`

Remove tracks or episodes from a Spotify playlist.

- **Service**: `spotify`
- **Action**: `remove_playlist_items`
- **Action id**: `spotify.remove_playlist_items`
- **Required scopes**: spotify.playlists.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "remove_playlist_items"
```

## Run

```bash
oo connector run "spotify" --action "remove_playlist_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Spotify data. Always confirm the target and get explicit user approval before running.
