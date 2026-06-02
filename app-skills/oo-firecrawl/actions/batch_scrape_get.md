# Firecrawl · `batch_scrape_get`

Get the current status and paged results of a Firecrawl batch scrape job by job ID.

- **Service**: `firecrawl`
- **Action**: `batch_scrape_get`
- **Action id**: `firecrawl.batch_scrape_get`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "batch_scrape_get"
```

## Run

```bash
oo connector run "firecrawl" --action "batch_scrape_get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
