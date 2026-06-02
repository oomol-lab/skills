# Spotify · `transfer_playback`

Transfer Spotify playback to another available device.

- **Service**: `spotify`
- **Action**: `transfer_playback`
- **Action id**: `spotify.transfer_playback`
- **Required scopes**: spotify.playback.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "transfer_playback"
```

## Run

```bash
oo connector run "spotify" --action "transfer_playback" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Spotify state. Confirm the exact payload and intended effect with the user before running.
