# Figma · `list_comments`

List comments on a Figma file or branch.

- **Service**: `figma`
- **Action**: `list_comments`
- **Action id**: `figma.list_comments`
- **Required scopes**: figma.file.comments.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "list_comments"
```

## Run

```bash
oo connector run "figma" --action "list_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
