# Browserless · `take_screenshot`

Generate a Browserless screenshot and return it as base64 content.

- **Service**: `browserless`
- **Action**: `take_screenshot`
- **Action id**: `browserless.take_screenshot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browserless" --action "take_screenshot"
```

## Run

```bash
oo connector run "browserless" --action "take_screenshot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
