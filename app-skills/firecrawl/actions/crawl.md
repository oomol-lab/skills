# Firecrawl · `crawl`

Start a Firecrawl crawl job with compatibility fields accepted from the Composio crawl action.

- **Service**: `firecrawl`
- **Action**: `crawl`
- **Action id**: `firecrawl.crawl`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "crawl"
```

## Run

```bash
oo connector run "firecrawl" --action "crawl" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
