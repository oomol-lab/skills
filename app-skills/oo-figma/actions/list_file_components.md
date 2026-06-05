# Figma · `list_file_components`

List published components in a Figma main file library.

- **Service**: `figma`
- **Action**: `list_file_components`
- **Action id**: `figma.list_file_components`
- **Required scopes**: figma.library.content.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "list_file_components"
```

## Run

```bash
oo connector run "figma" --action "list_file_components" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
