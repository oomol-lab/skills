# Spotify · `get_playback_state`

Get the current Spotify playback state for the authenticated user.

- **Service**: `spotify`
- **Action**: `get_playback_state`
- **Action id**: `spotify.get_playback_state`
- **Required scopes**: spotify.playback.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_playback_state"
```

## Run

```bash
oo connector run "spotify" --action "get_playback_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
