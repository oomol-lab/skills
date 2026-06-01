# HTML to Image · `convert_html_to_image`

Convert raw HTML and optional CSS to an image with HTML to Image and return the generated image URL.

- **Service**: `html_to_image`
- **Action**: `convert_html_to_image`
- **Action id**: `html_to_image.convert_html_to_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "html_to_image" --action "convert_html_to_image"
```

## Run

```bash
oo connector run "html_to_image" --action "convert_html_to_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
