# Spotify · `check_saved_tracks`

Check whether the current authenticated Spotify user has saved the given tracks.

- **Service**: `spotify`
- **Action**: `check_saved_tracks`
- **Action id**: `spotify.check_saved_tracks`
- **Required scopes**: spotify.library.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "check_saved_tracks"
```

## Run

```bash
oo connector run "spotify" --action "check_saved_tracks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
