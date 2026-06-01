# ScreenshotOne · `take_screenshot`

Take a ScreenshotOne screenshot from a website URL, HTML, or Markdown source.

- **Service**: `screenshotone`
- **Action**: `take_screenshot`
- **Action id**: `screenshotone.take_screenshot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "screenshotone" --action "take_screenshot"
```

## Run

```bash
oo connector run "screenshotone" --action "take_screenshot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
