# Spotify · `get_recommendations`

Get Spotify track recommendations from seed artists, tracks, or genres.

- **Service**: `spotify`
- **Action**: `get_recommendations`
- **Action id**: `spotify.get_recommendations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_recommendations"
```

## Run

```bash
oo connector run "spotify" --action "get_recommendations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
