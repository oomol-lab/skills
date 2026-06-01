# Firecrawl · `batch_scrape`

Start a Firecrawl batch scrape job for multiple URLs and return the async job ID.

- **Service**: `firecrawl`
- **Action**: `batch_scrape`
- **Action id**: `firecrawl.batch_scrape`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "batch_scrape"
```

## Run

```bash
oo connector run "firecrawl" --action "batch_scrape" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
