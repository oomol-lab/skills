# Figma · `post_comment`

Post a comment on a Figma file or branch.

- **Service**: `figma`
- **Action**: `post_comment`
- **Action id**: `figma.post_comment`
- **Required scopes**: figma.file.comments.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "post_comment"
```

## Run

```bash
oo connector run "figma" --action "post_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Figma state. Confirm the exact payload and intended effect with the user before running.
