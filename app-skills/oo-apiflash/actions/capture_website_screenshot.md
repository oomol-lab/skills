# ApiFlash · `capture_website_screenshot`

Capture a website screenshot with ApiFlash and return the generated screenshot URL.

- **Service**: `apiflash`
- **Action**: `capture_website_screenshot`
- **Action id**: `apiflash.capture_website_screenshot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apiflash" --action "capture_website_screenshot"
```

## Run

```bash
oo connector run "apiflash" --action "capture_website_screenshot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
