# Scrape.do · `take_screenshot`

Render one public URL through Scrape.do and return a screenshot as base64.

- **Service**: `scrape_do`
- **Action**: `take_screenshot`
- **Action id**: `scrape_do.take_screenshot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "scrape_do" --action "take_screenshot"
```

## Run

```bash
oo connector run "scrape_do" --action "take_screenshot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
