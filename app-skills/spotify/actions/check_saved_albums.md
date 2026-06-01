# Spotify · `check_saved_albums`

Check whether the current authenticated Spotify user has saved the given albums.

- **Service**: `spotify`
- **Action**: `check_saved_albums`
- **Action id**: `spotify.check_saved_albums`
- **Required scopes**: spotify.library.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "check_saved_albums"
```

## Run

```bash
oo connector run "spotify" --action "check_saved_albums" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
