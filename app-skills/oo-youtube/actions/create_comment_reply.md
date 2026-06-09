# YouTube · `create_comment_reply`

Reply to an existing YouTube comment thread.

- **Service**: `youtube`
- **Action**: `create_comment_reply`
- **Action id**: `youtube.create_comment_reply`
- **Required scopes**: youtube.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "create_comment_reply"
```

## Run

```bash
oo connector run "youtube" --action "create_comment_reply" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes YouTube state. Confirm the exact payload and intended effect with the user before running.
