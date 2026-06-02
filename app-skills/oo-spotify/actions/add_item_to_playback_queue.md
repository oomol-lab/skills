# Spotify · `add_item_to_playback_queue`

Add a Spotify track or episode to the end of the playback queue.

- **Service**: `spotify`
- **Action**: `add_item_to_playback_queue`
- **Action id**: `spotify.add_item_to_playback_queue`
- **Required scopes**: spotify.playback.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "add_item_to_playback_queue"
```

## Run

```bash
oo connector run "spotify" --action "add_item_to_playback_queue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Spotify state. Confirm the exact payload and intended effect with the user before running.
