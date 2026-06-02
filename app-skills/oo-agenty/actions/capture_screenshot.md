# Agenty · `capture_screenshot`

Capture a screenshot for one web page and return a downloadable file.

- **Service**: `agenty`
- **Action**: `capture_screenshot`
- **Action id**: `agenty.capture_screenshot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "capture_screenshot"
```

## Run

```bash
oo connector run "agenty" --action "capture_screenshot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
