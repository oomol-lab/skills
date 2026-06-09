# YouTube · `delete_video`

Delete a YouTube video owned by the authenticated user.

- **Service**: `youtube`
- **Action**: `delete_video`
- **Action id**: `youtube.delete_video`
- **Required scopes**: youtube.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "delete_video"
```

## Run

```bash
oo connector run "youtube" --action "delete_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites YouTube data. Always confirm the target and get explicit user approval before running.
