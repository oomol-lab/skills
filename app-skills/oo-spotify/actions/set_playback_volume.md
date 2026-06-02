# Spotify · `set_playback_volume`

Set Spotify playback volume for the targeted playback device.

- **Service**: `spotify`
- **Action**: `set_playback_volume`
- **Action id**: `spotify.set_playback_volume`
- **Required scopes**: spotify.playback.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "set_playback_volume"
```

## Run

```bash
oo connector run "spotify" --action "set_playback_volume" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Spotify state. Confirm the exact payload and intended effect with the user before running.
