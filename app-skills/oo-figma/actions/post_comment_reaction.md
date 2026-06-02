# Figma · `post_comment_reaction`

Add an emoji reaction to a Figma file comment.

- **Service**: `figma`
- **Action**: `post_comment_reaction`
- **Action id**: `figma.post_comment_reaction`
- **Required scopes**: file_comments:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "post_comment_reaction"
```

## Run

```bash
oo connector run "figma" --action "post_comment_reaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Figma state. Confirm the exact payload and intended effect with the user before running.
