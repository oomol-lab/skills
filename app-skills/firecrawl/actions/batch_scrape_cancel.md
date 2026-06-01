# Firecrawl · `batch_scrape_cancel`

Cancel a running Firecrawl batch scrape job by job ID.

- **Service**: `firecrawl`
- **Action**: `batch_scrape_cancel`
- **Action id**: `firecrawl.batch_scrape_cancel`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "batch_scrape_cancel"
```

## Run

```bash
oo connector run "firecrawl" --action "batch_scrape_cancel" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
