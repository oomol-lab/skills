# Figma · `list_project_files`

List files in a Figma project.

- **Service**: `figma`
- **Action**: `list_project_files`
- **Action id**: `figma.list_project_files`
- **Required scopes**: projects:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "list_project_files"
```

## Run

```bash
oo connector run "figma" --action "list_project_files" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
