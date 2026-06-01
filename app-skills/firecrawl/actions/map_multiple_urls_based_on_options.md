# Firecrawl · `map_multiple_urls_based_on_options`

Discover URLs from a website with Firecrawl's map endpoint using the Composio-compatible action name.

- **Service**: `firecrawl`
- **Action**: `map_multiple_urls_based_on_options`
- **Action id**: `firecrawl.map_multiple_urls_based_on_options`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "map_multiple_urls_based_on_options"
```

## Run

```bash
oo connector run "firecrawl" --action "map_multiple_urls_based_on_options" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
