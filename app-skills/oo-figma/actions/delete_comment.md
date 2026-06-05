# Figma · `delete_comment`

Delete a Figma comment created by the authenticated user.

- **Service**: `figma`
- **Action**: `delete_comment`
- **Action id**: `figma.delete_comment`
- **Required scopes**: figma.file.comments.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "delete_comment"
```

## Run

```bash
oo connector run "figma" --action "delete_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Figma data. Always confirm the target and get explicit user approval before running.
