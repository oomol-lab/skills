# Spotify · `get_audiobook_chapters`

Get Spotify chapters for an audiobook ID.

- **Service**: `spotify`
- **Action**: `get_audiobook_chapters`
- **Action id**: `spotify.get_audiobook_chapters`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_audiobook_chapters"
```

## Run

```bash
oo connector run "spotify" --action "get_audiobook_chapters" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
