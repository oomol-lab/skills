# WebScraper.io · `list_sitemaps`

List Web Scraper Cloud sitemaps with optional page and tag filters.

- **Service**: `webscraper_io`
- **Action**: `list_sitemaps`
- **Action id**: `webscraper_io.list_sitemaps`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webscraper_io" --action "list_sitemaps"
```

## Run

```bash
oo connector run "webscraper_io" --action "list_sitemaps" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
