# Spotify · `get_followed_artists`

Get artists followed by the current authenticated Spotify user.

- **Service**: `spotify`
- **Action**: `get_followed_artists`
- **Action id**: `spotify.get_followed_artists`
- **Required scopes**: spotify.follow.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_followed_artists"
```

## Run

```bash
oo connector run "spotify" --action "get_followed_artists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
