# Figma · `get_project_metadata`

Get metadata for a Figma project.

- **Service**: `figma`
- **Action**: `get_project_metadata`
- **Action id**: `figma.get_project_metadata`
- **Required scopes**: figma.project.metadata.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "get_project_metadata"
```

## Run

```bash
oo connector run "figma" --action "get_project_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
