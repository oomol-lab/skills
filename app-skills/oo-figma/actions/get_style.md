# Figma · `get_style`

Get metadata for a published Figma style by key.

- **Service**: `figma`
- **Action**: `get_style`
- **Action id**: `figma.get_style`
- **Required scopes**: figma.library.assets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "get_style"
```

## Run

```bash
oo connector run "figma" --action "get_style" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
