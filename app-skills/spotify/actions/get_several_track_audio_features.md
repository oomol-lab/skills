# Spotify · `get_several_track_audio_features`

Get Spotify audio features for multiple track IDs.

- **Service**: `spotify`
- **Action**: `get_several_track_audio_features`
- **Action id**: `spotify.get_several_track_audio_features`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_several_track_audio_features"
```

## Run

```bash
oo connector run "spotify" --action "get_several_track_audio_features" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
