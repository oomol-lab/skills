# ScreenshotOne · `take_bulk_screenshots`

Submit multiple ScreenshotOne screenshot requests in a single bulk call.

- **Service**: `screenshotone`
- **Action**: `take_bulk_screenshots`
- **Action id**: `screenshotone.take_bulk_screenshots`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "screenshotone" --action "take_bulk_screenshots"
```

## Run

```bash
oo connector run "screenshotone" --action "take_bulk_screenshots" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
