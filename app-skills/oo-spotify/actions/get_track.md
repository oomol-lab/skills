# Spotify · `get_track`

Get a Spotify track by its track ID.

- **Service**: `spotify`
- **Action**: `get_track`
- **Action id**: `spotify.get_track`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_track"
```

## Run

```bash
oo connector run "spotify" --action "get_track" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
