# Spotify · `set_repeat_mode`

Set Spotify repeat mode for the targeted playback device.

- **Service**: `spotify`
- **Action**: `set_repeat_mode`
- **Action id**: `spotify.set_repeat_mode`
- **Required scopes**: spotify.playback.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "set_repeat_mode"
```

## Run

```bash
oo connector run "spotify" --action "set_repeat_mode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Spotify state. Confirm the exact payload and intended effect with the user before running.
