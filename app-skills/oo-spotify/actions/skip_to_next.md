# Spotify · `skip_to_next`

Skip to the next item in the Spotify playback queue.

- **Service**: `spotify`
- **Action**: `skip_to_next`
- **Action id**: `spotify.skip_to_next`
- **Required scopes**: spotify.playback.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "skip_to_next"
```

## Run

```bash
oo connector run "spotify" --action "skip_to_next" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
