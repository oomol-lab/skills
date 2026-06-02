# Semantic Scholar · `match_paper_title`

Find the best Semantic Scholar paper match for a paper title.

- **Service**: `semantic_scholar`
- **Action**: `match_paper_title`
- **Action id**: `semantic_scholar.match_paper_title`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "semantic_scholar" --action "match_paper_title"
```

## Run

```bash
oo connector run "semantic_scholar" --action "match_paper_title" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
