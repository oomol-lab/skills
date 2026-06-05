# Figma · `get_image_fills`

Get temporary download URLs for image fills used in a Figma file.

- **Service**: `figma`
- **Action**: `get_image_fills`
- **Action id**: `figma.get_image_fills`
- **Required scopes**: figma.file.content.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "get_image_fills"
```

## Run

```bash
oo connector run "figma" --action "get_image_fills" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
