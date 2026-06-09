# YouTube · `list_comment_threads`

List top-level YouTube comment threads for a video, channel, or thread IDs.

- **Service**: `youtube`
- **Action**: `list_comment_threads`
- **Action id**: `youtube.list_comment_threads`
- **Required scopes**: youtube.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "list_comment_threads"
```

## Run

```bash
oo connector run "youtube" --action "list_comment_threads" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes YouTube state. Confirm the exact payload and intended effect with the user before running.
