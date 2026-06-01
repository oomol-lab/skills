# Semantic Scholar · `recommend_papers`

Get recommended Semantic Scholar papers from positive and optional negative examples.

- **Service**: `semantic_scholar`
- **Action**: `recommend_papers`
- **Action id**: `semantic_scholar.recommend_papers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "semantic_scholar" --action "recommend_papers"
```

## Run

```bash
oo connector run "semantic_scholar" --action "recommend_papers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
