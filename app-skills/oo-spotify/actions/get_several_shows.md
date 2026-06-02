# Spotify · `get_several_shows`

Get multiple Spotify shows by show ID.

- **Service**: `spotify`
- **Action**: `get_several_shows`
- **Action id**: `spotify.get_several_shows`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_several_shows"
```

## Run

```bash
oo connector run "spotify" --action "get_several_shows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
