# Tavily · `crawl`

Crawl a website and extract content from discovered pages with Tavily.

- **Service**: `tavily`
- **Action**: `crawl`
- **Action id**: `tavily.crawl`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tavily" --action "crawl"
```

## Run

```bash
oo connector run "tavily" --action "crawl" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
