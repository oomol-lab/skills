# Spotify · `get_several_chapters`

Get multiple Spotify chapters by chapter ID.

- **Service**: `spotify`
- **Action**: `get_several_chapters`
- **Action id**: `spotify.get_several_chapters`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_several_chapters"
```

## Run

```bash
oo connector run "spotify" --action "get_several_chapters" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
