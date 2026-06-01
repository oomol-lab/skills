# Figma · `list_file_component_sets`

List published component sets in a Figma main file library.

- **Service**: `figma`
- **Action**: `list_file_component_sets`
- **Action id**: `figma.list_file_component_sets`
- **Required scopes**: library_content:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "list_file_component_sets"
```

## Run

```bash
oo connector run "figma" --action "list_file_component_sets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
