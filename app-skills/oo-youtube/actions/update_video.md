# YouTube · `update_video`

Update a YouTube video's snippet and status metadata.

- **Service**: `youtube`
- **Action**: `update_video`
- **Action id**: `youtube.update_video`
- **Required scopes**: youtube.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "update_video"
```

## Run

```bash
oo connector run "youtube" --action "update_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes YouTube state. Confirm the exact payload and intended effect with the user before running.
