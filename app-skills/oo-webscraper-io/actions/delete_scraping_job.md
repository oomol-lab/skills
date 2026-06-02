# WebScraper.io · `delete_scraping_job`

Delete a Web Scraper Cloud scraping job by numeric scraping job ID.

- **Service**: `webscraper_io`
- **Action**: `delete_scraping_job`
- **Action id**: `webscraper_io.delete_scraping_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webscraper_io" --action "delete_scraping_job"
```

## Run

```bash
oo connector run "webscraper_io" --action "delete_scraping_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites WebScraper.io data. Always confirm the target and get explicit user approval before running.
