# WebScraper.io · `create_sitemap`

Create a new Web Scraper Cloud sitemap from a sitemap JSON document.

- **Service**: `webscraper_io`
- **Action**: `create_sitemap`
- **Action id**: `webscraper_io.create_sitemap`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webscraper_io" --action "create_sitemap"
```

## Run

```bash
oo connector run "webscraper_io" --action "create_sitemap" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WebScraper.io state. Confirm the exact payload and intended effect with the user before running.
