# Firecrawl · `crawl_v2`

Start a Firecrawl crawl job with the official v2 crawl fields, including prompt-driven options generation.

- **Service**: `firecrawl`
- **Action**: `crawl_v2`
- **Action id**: `firecrawl.crawl_v2`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "crawl_v2"
```

## Run

```bash
oo connector run "firecrawl" --action "crawl_v2" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
