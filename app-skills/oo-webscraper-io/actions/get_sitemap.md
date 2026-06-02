# WebScraper.io · `get_sitemap`

Get one Web Scraper Cloud sitemap by numeric sitemap ID.

- **Service**: `webscraper_io`
- **Action**: `get_sitemap`
- **Action id**: `webscraper_io.get_sitemap`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webscraper_io" --action "get_sitemap"
```

## Run

```bash
oo connector run "webscraper_io" --action "get_sitemap" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
