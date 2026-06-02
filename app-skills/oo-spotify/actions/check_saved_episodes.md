# Spotify · `check_saved_episodes`

Check whether the current authenticated Spotify user has saved the given episodes.

- **Service**: `spotify`
- **Action**: `check_saved_episodes`
- **Action id**: `spotify.check_saved_episodes`
- **Required scopes**: spotify.library.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "check_saved_episodes"
```

## Run

```bash
oo connector run "spotify" --action "check_saved_episodes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
