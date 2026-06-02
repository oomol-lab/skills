# WebScraper.io · `update_sitemap`

Update an existing Web Scraper Cloud sitemap by numeric sitemap ID.

- **Service**: `webscraper_io`
- **Action**: `update_sitemap`
- **Action id**: `webscraper_io.update_sitemap`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webscraper_io" --action "update_sitemap"
```

## Run

```bash
oo connector run "webscraper_io" --action "update_sitemap" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WebScraper.io state. Confirm the exact payload and intended effect with the user before running.
