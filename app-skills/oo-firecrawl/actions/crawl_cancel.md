# Firecrawl · `crawl_cancel`

Cancel a running Firecrawl crawl job by job ID.

- **Service**: `firecrawl`
- **Action**: `crawl_cancel`
- **Action id**: `firecrawl.crawl_cancel`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "crawl_cancel"
```

## Run

```bash
oo connector run "firecrawl" --action "crawl_cancel" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
