# Spotify · `get_several_artists`

Get multiple Spotify artists by artist ID.

- **Service**: `spotify`
- **Action**: `get_several_artists`
- **Action id**: `spotify.get_several_artists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_several_artists"
```

## Run

```bash
oo connector run "spotify" --action "get_several_artists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
