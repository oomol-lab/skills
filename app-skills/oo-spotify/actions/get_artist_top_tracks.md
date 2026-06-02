# Spotify · `get_artist_top_tracks`

Get top Spotify tracks for an artist ID in a given market.

- **Service**: `spotify`
- **Action**: `get_artist_top_tracks`
- **Action id**: `spotify.get_artist_top_tracks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_artist_top_tracks"
```

## Run

```bash
oo connector run "spotify" --action "get_artist_top_tracks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
