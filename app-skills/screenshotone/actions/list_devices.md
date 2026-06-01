# ScreenshotOne · `list_devices`

List the ScreenshotOne device presets available for viewport emulation.

- **Service**: `screenshotone`
- **Action**: `list_devices`
- **Action id**: `screenshotone.list_devices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "screenshotone" --action "list_devices"
```

## Run

```bash
oo connector run "screenshotone" --action "list_devices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
