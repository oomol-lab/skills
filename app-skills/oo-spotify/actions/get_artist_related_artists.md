# Spotify · `get_artist_related_artists`

Get related Spotify artists for an artist ID.

- **Service**: `spotify`
- **Action**: `get_artist_related_artists`
- **Action id**: `spotify.get_artist_related_artists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_artist_related_artists"
```

## Run

```bash
oo connector run "spotify" --action "get_artist_related_artists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
