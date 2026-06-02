# screenshot.fyi · `take_screenshot`

Capture a website screenshot with screenshot.fyi and return the generated URL.

- **Service**: `screenshot_fyi`
- **Action**: `take_screenshot`
- **Action id**: `screenshot_fyi.take_screenshot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "screenshot_fyi" --action "take_screenshot"
```

## Run

```bash
oo connector run "screenshot_fyi" --action "take_screenshot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
