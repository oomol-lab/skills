# YouTube · `delete_playlist_item`

Delete an item from a YouTube playlist.

- **Service**: `youtube`
- **Action**: `delete_playlist_item`
- **Action id**: `youtube.delete_playlist_item`
- **Required scopes**: youtube.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "delete_playlist_item"
```

## Run

```bash
oo connector run "youtube" --action "delete_playlist_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites YouTube data. Always confirm the target and get explicit user approval before running.
