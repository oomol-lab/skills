# Google Search Console · `query_search_analytics`

Query Search Console performance data for a property across dates, dimensions, filters, and search types.

- **Service**: `google_search_console`
- **Action**: `query_search_analytics`
- **Action id**: `google_search_console.query_search_analytics`
- **Required scopes**: google_search_console.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_search_console" --action "query_search_analytics"
```

## Run

```bash
oo connector run "google_search_console" --action "query_search_analytics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
