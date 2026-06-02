# Linkup · `search_results`

Search the web with Linkup and return raw grounded search results.

- **Service**: `linkup`
- **Action**: `search_results`
- **Action id**: `linkup.search_results`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkup" --action "search_results"
```

## Run

```bash
oo connector run "linkup" --action "search_results" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
