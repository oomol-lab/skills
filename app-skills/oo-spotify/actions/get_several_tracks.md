# Spotify · `get_several_tracks`

Get multiple Spotify tracks by track ID.

- **Service**: `spotify`
- **Action**: `get_several_tracks`
- **Action id**: `spotify.get_several_tracks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_several_tracks"
```

## Run

```bash
oo connector run "spotify" --action "get_several_tracks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
