# Semantic Scholar · `get_papers`

Get details for multiple Semantic Scholar papers at once.

- **Service**: `semantic_scholar`
- **Action**: `get_papers`
- **Action id**: `semantic_scholar.get_papers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "semantic_scholar" --action "get_papers"
```

## Run

```bash
oo connector run "semantic_scholar" --action "get_papers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
