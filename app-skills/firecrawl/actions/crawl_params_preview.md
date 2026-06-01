# Firecrawl · `crawl_params_preview`

Preview the crawl parameters that Firecrawl would infer from a URL and prompt before starting the crawl.

- **Service**: `firecrawl`
- **Action**: `crawl_params_preview`
- **Action id**: `firecrawl.crawl_params_preview`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "crawl_params_preview"
```

## Run

```bash
oo connector run "firecrawl" --action "crawl_params_preview" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
