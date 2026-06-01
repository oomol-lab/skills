# WebScraper.io · `download_scraping_job_json`

Download one Web Scraper Cloud scraping job result in JSON Lines format.

- **Service**: `webscraper_io`
- **Action**: `download_scraping_job_json`
- **Action id**: `webscraper_io.download_scraping_job_json`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webscraper_io" --action "download_scraping_job_json"
```

## Run

```bash
oo connector run "webscraper_io" --action "download_scraping_job_json" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
