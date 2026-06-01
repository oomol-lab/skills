# Spotify · `get_currently_playing_track`

Get the currently playing Spotify item for the authenticated user.

- **Service**: `spotify`
- **Action**: `get_currently_playing_track`
- **Action id**: `spotify.get_currently_playing_track`
- **Required scopes**: spotify.playback.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_currently_playing_track"
```

## Run

```bash
oo connector run "spotify" --action "get_currently_playing_track" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
