# Semantic Scholar · `search_snippets`

Search text snippets in Semantic Scholar papers.

- **Service**: `semantic_scholar`
- **Action**: `search_snippets`
- **Action id**: `semantic_scholar.search_snippets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "semantic_scholar" --action "search_snippets"
```

## Run

```bash
oo connector run "semantic_scholar" --action "search_snippets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
