# Spotify · `unfollow_playlist`

Unfollow a Spotify playlist on behalf of the authenticated user.

- **Service**: `spotify`
- **Action**: `unfollow_playlist`
- **Action id**: `spotify.unfollow_playlist`
- **Required scopes**: spotify.playlists.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "unfollow_playlist"
```

## Run

```bash
oo connector run "spotify" --action "unfollow_playlist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
