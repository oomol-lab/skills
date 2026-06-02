# Spotify · `get_user_saved_albums`

Get albums saved by the current authenticated Spotify user.

- **Service**: `spotify`
- **Action**: `get_user_saved_albums`
- **Action id**: `spotify.get_user_saved_albums`
- **Required scopes**: spotify.library.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_user_saved_albums"
```

## Run

```bash
oo connector run "spotify" --action "get_user_saved_albums" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
