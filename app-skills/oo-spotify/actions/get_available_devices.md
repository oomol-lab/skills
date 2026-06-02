# Spotify · `get_available_devices`

Get available Spotify playback devices for the current authenticated user.

- **Service**: `spotify`
- **Action**: `get_available_devices`
- **Action id**: `spotify.get_available_devices`
- **Required scopes**: spotify.playback.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_available_devices"
```

## Run

```bash
oo connector run "spotify" --action "get_available_devices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
