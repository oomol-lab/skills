# Algolia · `search_index`

Search a single Algolia index with the most common search parameters.

- **Service**: `algolia`
- **Action**: `search_index`
- **Action id**: `algolia.search_index`
- **Required scopes**: search

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "algolia" --action "search_index"
```

## Run

```bash
oo connector run "algolia" --action "search_index" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
