# Figma · `list_comment_reactions`

List emoji reactions on a Figma file comment.

- **Service**: `figma`
- **Action**: `list_comment_reactions`
- **Action id**: `figma.list_comment_reactions`
- **Required scopes**: file_comments:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "list_comment_reactions"
```

## Run

```bash
oo connector run "figma" --action "list_comment_reactions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Figma state. Confirm the exact payload and intended effect with the user before running.
