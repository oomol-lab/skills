# ScreenshotOne · `take_animated_screenshot`

Take an animated ScreenshotOne capture as a video or GIF file.

- **Service**: `screenshotone`
- **Action**: `take_animated_screenshot`
- **Action id**: `screenshotone.take_animated_screenshot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "screenshotone" --action "take_animated_screenshot"
```

## Run

```bash
oo connector run "screenshotone" --action "take_animated_screenshot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
