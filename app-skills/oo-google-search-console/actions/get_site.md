# Google Search Console · `get_site`

Fetch one Search Console property and the current account permission level.

- **Service**: `google_search_console`
- **Action**: `get_site`
- **Action id**: `google_search_console.get_site`
- **Required scopes**: google_search_console.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_search_console" --action "get_site"
```

## Run

```bash
oo connector run "google_search_console" --action "get_site" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
