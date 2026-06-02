# Google Search Console · `get_sitemap`

Fetch one Search Console sitemap by property URL and sitemap URL.

- **Service**: `google_search_console`
- **Action**: `get_sitemap`
- **Action id**: `google_search_console.get_sitemap`
- **Required scopes**: google_search_console.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_search_console" --action "get_sitemap"
```

## Run

```bash
oo connector run "google_search_console" --action "get_sitemap" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
