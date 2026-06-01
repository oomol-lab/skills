# SearchApi · `get_locations`

Look up canonical SearchApi locations for geo-targeted search queries.

- **Service**: `search_api`
- **Action**: `get_locations`
- **Action id**: `search_api.get_locations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "search_api" --action "get_locations"
```

## Run

```bash
oo connector run "search_api" --action "get_locations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
