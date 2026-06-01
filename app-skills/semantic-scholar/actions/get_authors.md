# Semantic Scholar · `get_authors`

Get details for multiple Semantic Scholar authors at once.

- **Service**: `semantic_scholar`
- **Action**: `get_authors`
- **Action id**: `semantic_scholar.get_authors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "semantic_scholar" --action "get_authors"
```

## Run

```bash
oo connector run "semantic_scholar" --action "get_authors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
