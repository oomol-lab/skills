# Figma · `render_images`

Render selected Figma file nodes and return temporary image URLs.

- **Service**: `figma`
- **Action**: `render_images`
- **Action id**: `figma.render_images`
- **Required scopes**: figma.file.content.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "render_images"
```

## Run

```bash
oo connector run "figma" --action "render_images" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
