# Figma · `list_file_versions`

List version history records for a Figma file.

- **Service**: `figma`
- **Action**: `list_file_versions`
- **Action id**: `figma.list_file_versions`
- **Required scopes**: figma.file.versions.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "list_file_versions"
```

## Run

```bash
oo connector run "figma" --action "list_file_versions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
