# Figma · `get_file_nodes`

Get JSON for selected node IDs from a Figma file or branch.

- **Service**: `figma`
- **Action**: `get_file_nodes`
- **Action id**: `figma.get_file_nodes`
- **Required scopes**: file_content:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "get_file_nodes"
```

## Run

```bash
oo connector run "figma" --action "get_file_nodes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
