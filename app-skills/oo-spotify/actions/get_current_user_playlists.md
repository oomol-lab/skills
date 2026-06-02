# Spotify · `get_current_user_playlists`

Get playlists for the current authenticated Spotify user.

- **Service**: `spotify`
- **Action**: `get_current_user_playlists`
- **Action id**: `spotify.get_current_user_playlists`
- **Required scopes**: spotify.playlists.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_current_user_playlists"
```

## Run

```bash
oo connector run "spotify" --action "get_current_user_playlists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
