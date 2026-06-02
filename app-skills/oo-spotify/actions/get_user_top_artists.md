# Spotify · `get_user_top_artists`

Get the current Spotify user's top artists for a selected affinity time range.

- **Service**: `spotify`
- **Action**: `get_user_top_artists`
- **Action id**: `spotify.get_user_top_artists`
- **Required scopes**: spotify.top.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_user_top_artists"
```

## Run

```bash
oo connector run "spotify" --action "get_user_top_artists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
