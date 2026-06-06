# YouTube · `list_playlists`

List YouTube playlists by ID, channel, or authenticated owner.

- **Service**: `youtube`
- **Action**: `list_playlists`
- **Action id**: `youtube.list_playlists`
- **Required scopes**: youtube.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "list_playlists"
```

## Run

```bash
oo connector run "youtube" --action "list_playlists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
