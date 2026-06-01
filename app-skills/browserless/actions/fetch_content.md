# Browserless · `fetch_content`

Fetch fully rendered HTML content from Browserless.

- **Service**: `browserless`
- **Action**: `fetch_content`
- **Action id**: `browserless.fetch_content`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browserless" --action "fetch_content"
```

## Run

```bash
oo connector run "browserless" --action "fetch_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
