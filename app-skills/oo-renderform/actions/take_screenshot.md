# RenderForm · `take_screenshot`

Capture one website screenshot with RenderForm and return the request identifier, file URL, and echoed request.

- **Service**: `renderform`
- **Action**: `take_screenshot`
- **Action id**: `renderform.take_screenshot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "renderform" --action "take_screenshot"
```

## Run

```bash
oo connector run "renderform" --action "take_screenshot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
