# Figma · `list_file_styles`

List published styles in a Figma main file library.

- **Service**: `figma`
- **Action**: `list_file_styles`
- **Action id**: `figma.list_file_styles`
- **Required scopes**: figma.library.content.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "list_file_styles"
```

## Run

```bash
oo connector run "figma" --action "list_file_styles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
