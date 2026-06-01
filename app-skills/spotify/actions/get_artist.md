# Spotify · `get_artist`

Get a Spotify artist by its artist ID.

- **Service**: `spotify`
- **Action**: `get_artist`
- **Action id**: `spotify.get_artist`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_artist"
```

## Run

```bash
oo connector run "spotify" --action "get_artist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
