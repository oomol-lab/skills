# Semantic Scholar · `recommend_for_paper`

Get recommended Semantic Scholar papers for one positive example paper.

- **Service**: `semantic_scholar`
- **Action**: `recommend_for_paper`
- **Action id**: `semantic_scholar.recommend_for_paper`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "semantic_scholar" --action "recommend_for_paper"
```

## Run

```bash
oo connector run "semantic_scholar" --action "recommend_for_paper" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
