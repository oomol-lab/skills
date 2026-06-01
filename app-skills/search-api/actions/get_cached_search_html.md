# SearchApi · `get_cached_search_html`

Retrieve one cached SearchApi search result in HTML format by search identifier.

- **Service**: `search_api`
- **Action**: `get_cached_search_html`
- **Action id**: `search_api.get_cached_search_html`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "search_api" --action "get_cached_search_html"
```

## Run

```bash
oo connector run "search_api" --action "get_cached_search_html" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
