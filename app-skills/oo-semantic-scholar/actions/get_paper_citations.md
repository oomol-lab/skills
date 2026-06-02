# Semantic Scholar · `get_paper_citations`

List papers that cite a Semantic Scholar paper.

- **Service**: `semantic_scholar`
- **Action**: `get_paper_citations`
- **Action id**: `semantic_scholar.get_paper_citations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "semantic_scholar" --action "get_paper_citations"
```

## Run

```bash
oo connector run "semantic_scholar" --action "get_paper_citations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
