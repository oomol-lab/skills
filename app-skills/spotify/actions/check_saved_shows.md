# Spotify · `check_saved_shows`

Check whether the current authenticated Spotify user has saved the given shows.

- **Service**: `spotify`
- **Action**: `check_saved_shows`
- **Action id**: `spotify.check_saved_shows`
- **Required scopes**: spotify.library.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "check_saved_shows"
```

## Run

```bash
oo connector run "spotify" --action "check_saved_shows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
