# Spotify · `seek_to_position`

Seek the currently playing Spotify item to the given playback position.

- **Service**: `spotify`
- **Action**: `seek_to_position`
- **Action id**: `spotify.seek_to_position`
- **Required scopes**: spotify.playback.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "seek_to_position"
```

## Run

```bash
oo connector run "spotify" --action "seek_to_position" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
