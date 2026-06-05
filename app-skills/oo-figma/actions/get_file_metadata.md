# Figma · `get_file_metadata`

Get lightweight metadata for a Figma file without fetching its full document.

- **Service**: `figma`
- **Action**: `get_file_metadata`
- **Action id**: `figma.get_file_metadata`
- **Required scopes**: figma.file.metadata.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "get_file_metadata"
```

## Run

```bash
oo connector run "figma" --action "get_file_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
