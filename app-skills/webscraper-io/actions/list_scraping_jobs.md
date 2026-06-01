# WebScraper.io · `list_scraping_jobs`

List Web Scraper Cloud scraping jobs with optional page, sitemap, and tag filters.

- **Service**: `webscraper_io`
- **Action**: `list_scraping_jobs`
- **Action id**: `webscraper_io.list_scraping_jobs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webscraper_io" --action "list_scraping_jobs"
```

## Run

```bash
oo connector run "webscraper_io" --action "list_scraping_jobs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
