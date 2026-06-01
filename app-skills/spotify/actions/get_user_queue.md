# Spotify · `get_user_queue`

Get the current Spotify queue for the authenticated user.

- **Service**: `spotify`
- **Action**: `get_user_queue`
- **Action id**: `spotify.get_user_queue`
- **Required scopes**: spotify.playback.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_user_queue"
```

## Run

```bash
oo connector run "spotify" --action "get_user_queue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
