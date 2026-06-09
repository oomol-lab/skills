# YouTube · `update_playlist_item`

Update a YouTube playlist item's position or note.

- **Service**: `youtube`
- **Action**: `update_playlist_item`
- **Action id**: `youtube.update_playlist_item`
- **Required scopes**: youtube.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "update_playlist_item"
```

## Run

```bash
oo connector run "youtube" --action "update_playlist_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes YouTube state. Confirm the exact payload and intended effect with the user before running.
