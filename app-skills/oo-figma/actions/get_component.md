# Figma · `get_component`

Get metadata for a published Figma component by key.

- **Service**: `figma`
- **Action**: `get_component`
- **Action id**: `figma.get_component`
- **Required scopes**: figma.library.assets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "get_component"
```

## Run

```bash
oo connector run "figma" --action "get_component" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
