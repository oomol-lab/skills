# HTML to Image · `capture_website_screenshot`

Capture a public webpage with HTML to Image and return the generated screenshot URL.

- **Service**: `html_to_image`
- **Action**: `capture_website_screenshot`
- **Action id**: `html_to_image.capture_website_screenshot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "html_to_image" --action "capture_website_screenshot"
```

## Run

```bash
oo connector run "html_to_image" --action "capture_website_screenshot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
