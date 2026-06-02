# Figma · `get_file`

Get the JSON document for a Figma file or branch.

- **Service**: `figma`
- **Action**: `get_file`
- **Action id**: `figma.get_file`
- **Required scopes**: file_content:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "get_file"
```

## Run

```bash
oo connector run "figma" --action "get_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
