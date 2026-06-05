# AltText.ai · `scrape_page`

Scrape a web page or raw HTML document and queue discovered images for alt text generation.

- **Service**: `alt_text_ai`
- **Action**: `scrape_page`
- **Action id**: `alt_text_ai.scrape_page`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alt_text_ai" --action "scrape_page"
```

## Run

```bash
oo connector run "alt_text_ai" --action "scrape_page" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
