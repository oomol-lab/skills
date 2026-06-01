# Firecrawl · `search`

Search the web with Firecrawl and optionally scrape the top results in the requested formats.

- **Service**: `firecrawl`
- **Action**: `search`
- **Action id**: `firecrawl.search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "search"
```

## Run

```bash
oo connector run "firecrawl" --action "search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
