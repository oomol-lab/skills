# ScrapingBee · `fetch_html`

Fetch HTML content from one public URL with optional rendering and proxy controls.

- **Service**: `scrapingbee`
- **Action**: `fetch_html`
- **Action id**: `scrapingbee.fetch_html`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "scrapingbee" --action "fetch_html"
```

## Run

```bash
oo connector run "scrapingbee" --action "fetch_html" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
