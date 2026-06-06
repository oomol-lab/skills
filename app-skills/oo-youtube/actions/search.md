# YouTube · `search`

Search YouTube for videos, channels, or playlists.

- **Service**: `youtube`
- **Action**: `search`
- **Action id**: `youtube.search`
- **Required scopes**: youtube.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "search"
```

## Run

```bash
oo connector run "youtube" --action "search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
