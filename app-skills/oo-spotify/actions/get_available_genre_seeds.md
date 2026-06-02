# Spotify · `get_available_genre_seeds`

Get the genre seeds supported by Spotify recommendations.

- **Service**: `spotify`
- **Action**: `get_available_genre_seeds`
- **Action id**: `spotify.get_available_genre_seeds`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_available_genre_seeds"
```

## Run

```bash
oo connector run "spotify" --action "get_available_genre_seeds" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
