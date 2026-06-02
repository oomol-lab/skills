# Spotify · `get_track_audio_analysis`

Get Spotify audio analysis for a track ID.

- **Service**: `spotify`
- **Action**: `get_track_audio_analysis`
- **Action id**: `spotify.get_track_audio_analysis`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_track_audio_analysis"
```

## Run

```bash
oo connector run "spotify" --action "get_track_audio_analysis" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
