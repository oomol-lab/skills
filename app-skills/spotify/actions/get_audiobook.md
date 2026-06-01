# Spotify · `get_audiobook`

Get a Spotify audiobook by its audiobook ID.

- **Service**: `spotify`
- **Action**: `get_audiobook`
- **Action id**: `spotify.get_audiobook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_audiobook"
```

## Run

```bash
oo connector run "spotify" --action "get_audiobook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
