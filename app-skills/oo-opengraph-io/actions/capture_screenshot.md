# OpenGraph.io · `capture_screenshot`

Capture a webpage screenshot through the OpenGraph.io Screenshot endpoint with configurable viewport, delay, and element selection.

- **Service**: `opengraph_io`
- **Action**: `capture_screenshot`
- **Action id**: `opengraph_io.capture_screenshot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "opengraph_io" --action "capture_screenshot"
```

## Run

```bash
oo connector run "opengraph_io" --action "capture_screenshot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
