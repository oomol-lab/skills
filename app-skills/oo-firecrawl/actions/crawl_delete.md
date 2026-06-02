# Firecrawl · `crawl_delete`

Compatibility alias of crawl_cancel for the Composio FIRECRAWL_CRAWL_DELETE action.

- **Service**: `firecrawl`
- **Action**: `crawl_delete`
- **Action id**: `firecrawl.crawl_delete`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "crawl_delete"
```

## Run

```bash
oo connector run "firecrawl" --action "crawl_delete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Firecrawl data. Always confirm the target and get explicit user approval before running.
