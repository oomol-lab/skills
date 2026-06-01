# ApiFlash · `get_screenshot_metadata`

Read HTTP metadata for a screenshot URL previously returned by ApiFlash.

- **Service**: `apiflash`
- **Action**: `get_screenshot_metadata`
- **Action id**: `apiflash.get_screenshot_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apiflash" --action "get_screenshot_metadata"
```

## Run

```bash
oo connector run "apiflash" --action "get_screenshot_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
