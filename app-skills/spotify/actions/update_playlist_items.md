# Spotify · `update_playlist_items`

Replace all items in a Spotify playlist or reorder an existing range of items.

- **Service**: `spotify`
- **Action**: `update_playlist_items`
- **Action id**: `spotify.update_playlist_items`
- **Required scopes**: spotify.playlists.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "update_playlist_items"
```

## Run

```bash
oo connector run "spotify" --action "update_playlist_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Spotify state. Confirm the exact payload and intended effect with the user before running.
