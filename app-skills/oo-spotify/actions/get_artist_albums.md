# Spotify · `get_artist_albums`

Get Spotify albums for an artist by the artist ID.

- **Service**: `spotify`
- **Action**: `get_artist_albums`
- **Action id**: `spotify.get_artist_albums`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_artist_albums"
```

## Run

```bash
oo connector run "spotify" --action "get_artist_albums" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
