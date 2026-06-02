# Semantic Scholar · `search_papers`

Search Semantic Scholar papers by relevance with optional publication filters.

- **Service**: `semantic_scholar`
- **Action**: `search_papers`
- **Action id**: `semantic_scholar.search_papers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "semantic_scholar" --action "search_papers"
```

## Run

```bash
oo connector run "semantic_scholar" --action "search_papers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
