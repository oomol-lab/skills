# SearchApi · `search`

Run one SearchApi search request with the first-pass common query parameters.

- **Service**: `search_api`
- **Action**: `search`
- **Action id**: `search_api.search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "search_api" --action "search"
```

## Run

```bash
oo connector run "search_api" --action "search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
