# Firecrawl · `batch_scrape_get_errors`

Get the failed URLs and robots.txt blocks from a Firecrawl batch scrape job.

- **Service**: `firecrawl`
- **Action**: `batch_scrape_get_errors`
- **Action id**: `firecrawl.batch_scrape_get_errors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "batch_scrape_get_errors"
```

## Run

```bash
oo connector run "firecrawl" --action "batch_scrape_get_errors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
