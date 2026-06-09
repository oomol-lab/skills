# YouTube · `post_comment`

Post a top-level public comment on a YouTube video.

- **Service**: `youtube`
- **Action**: `post_comment`
- **Action id**: `youtube.post_comment`
- **Required scopes**: youtube.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "post_comment"
```

## Run

```bash
oo connector run "youtube" --action "post_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes YouTube state. Confirm the exact payload and intended effect with the user before running.
