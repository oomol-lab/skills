# Firecrawl · `scrape`

Scrape a single URL with Firecrawl and return the extracted page content in the requested formats.

- **Service**: `firecrawl`
- **Action**: `scrape`
- **Action id**: `firecrawl.scrape`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "scrape"
```

## Run

```bash
oo connector run "firecrawl" --action "scrape" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
