# Semantic Scholar · `bulk_search_papers`

Bulk-search Semantic Scholar papers and page through large result sets with tokens.

- **Service**: `semantic_scholar`
- **Action**: `bulk_search_papers`
- **Action id**: `semantic_scholar.bulk_search_papers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "semantic_scholar" --action "bulk_search_papers"
```

## Run

```bash
oo connector run "semantic_scholar" --action "bulk_search_papers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
