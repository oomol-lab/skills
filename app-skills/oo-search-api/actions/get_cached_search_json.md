# SearchApi · `get_cached_search_json`

Retrieve one cached SearchApi search result in JSON format by search identifier.

- **Service**: `search_api`
- **Action**: `get_cached_search_json`
- **Action id**: `search_api.get_cached_search_json`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "search_api" --action "get_cached_search_json"
```

## Run

```bash
oo connector run "search_api" --action "get_cached_search_json" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
