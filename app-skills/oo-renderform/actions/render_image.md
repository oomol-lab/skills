# RenderForm · `render_image`

Render one RenderForm image or PDF from a template and return the request identifier, file URL, and echoed request.

- **Service**: `renderform`
- **Action**: `render_image`
- **Action id**: `renderform.render_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "renderform" --action "render_image"
```

## Run

```bash
oo connector run "renderform" --action "render_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
