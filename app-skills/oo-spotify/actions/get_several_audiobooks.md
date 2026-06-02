# Spotify · `get_several_audiobooks`

Get multiple Spotify audiobooks by audiobook ID.

- **Service**: `spotify`
- **Action**: `get_several_audiobooks`
- **Action id**: `spotify.get_several_audiobooks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_several_audiobooks"
```

## Run

```bash
oo connector run "spotify" --action "get_several_audiobooks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
