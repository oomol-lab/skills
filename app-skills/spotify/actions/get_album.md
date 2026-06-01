# Spotify · `get_album`

Get a Spotify album by its album ID.

- **Service**: `spotify`
- **Action**: `get_album`
- **Action id**: `spotify.get_album`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_album"
```

## Run

```bash
oo connector run "spotify" --action "get_album" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
