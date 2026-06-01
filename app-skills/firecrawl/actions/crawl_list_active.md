# Firecrawl · `crawl_list_active`

List the currently active Firecrawl crawl jobs for the authenticated team.

- **Service**: `firecrawl`
- **Action**: `crawl_list_active`
- **Action id**: `firecrawl.crawl_list_active`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "crawl_list_active"
```

## Run

```bash
oo connector run "firecrawl" --action "crawl_list_active" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
