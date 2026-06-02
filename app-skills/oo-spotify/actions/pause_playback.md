# Spotify · `pause_playback`

Pause Spotify playback on the targeted device or current active device.

- **Service**: `spotify`
- **Action**: `pause_playback`
- **Action id**: `spotify.pause_playback`
- **Required scopes**: spotify.playback.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "pause_playback"
```

## Run

```bash
oo connector run "spotify" --action "pause_playback" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
