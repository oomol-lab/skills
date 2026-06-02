# WebScraper.io · `create_scraping_job`

Create a Web Scraper Cloud scraping job for one sitemap.

- **Service**: `webscraper_io`
- **Action**: `create_scraping_job`
- **Action id**: `webscraper_io.create_scraping_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webscraper_io" --action "create_scraping_job"
```

## Run

```bash
oo connector run "webscraper_io" --action "create_scraping_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WebScraper.io state. Confirm the exact payload and intended effect with the user before running.
