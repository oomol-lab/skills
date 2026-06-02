# Spotify · `get_chapter`

Get a Spotify chapter by its chapter ID.

- **Service**: `spotify`
- **Action**: `get_chapter`
- **Action id**: `spotify.get_chapter`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_chapter"
```

## Run

```bash
oo connector run "spotify" --action "get_chapter" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
