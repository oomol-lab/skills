# Google Search Console · `list_sitemaps`

List sitemaps submitted for a Search Console property.

- **Service**: `google_search_console`
- **Action**: `list_sitemaps`
- **Action id**: `google_search_console.list_sitemaps`
- **Required scopes**: google_search_console.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_search_console" --action "list_sitemaps"
```

## Run

```bash
oo connector run "google_search_console" --action "list_sitemaps" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
