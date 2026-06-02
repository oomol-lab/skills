# Spotify · `check_users_follow_playlist`

Check whether the given Spotify users follow a playlist.

- **Service**: `spotify`
- **Action**: `check_users_follow_playlist`
- **Action id**: `spotify.check_users_follow_playlist`
- **Required scopes**: spotify.playlists.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "check_users_follow_playlist"
```

## Run

```bash
oo connector run "spotify" --action "check_users_follow_playlist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
