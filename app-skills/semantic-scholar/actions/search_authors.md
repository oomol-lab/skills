# Semantic Scholar · `search_authors`

Search Semantic Scholar authors by name.

- **Service**: `semantic_scholar`
- **Action**: `search_authors`
- **Action id**: `semantic_scholar.search_authors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "semantic_scholar" --action "search_authors"
```

## Run

```bash
oo connector run "semantic_scholar" --action "search_authors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
