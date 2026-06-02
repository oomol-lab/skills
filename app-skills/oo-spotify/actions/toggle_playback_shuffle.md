# Spotify · `toggle_playback_shuffle`

Enable or disable Spotify playback shuffle on the targeted device.

- **Service**: `spotify`
- **Action**: `toggle_playback_shuffle`
- **Action id**: `spotify.toggle_playback_shuffle`
- **Required scopes**: spotify.playback.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "toggle_playback_shuffle"
```

## Run

```bash
oo connector run "spotify" --action "toggle_playback_shuffle" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
