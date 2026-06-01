# Firecrawl · `crawl_get`

Get the current status and paged results of a Firecrawl crawl job by job ID.

- **Service**: `firecrawl`
- **Action**: `crawl_get`
- **Action id**: `firecrawl.crawl_get`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "crawl_get"
```

## Run

```bash
oo connector run "firecrawl" --action "crawl_get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
