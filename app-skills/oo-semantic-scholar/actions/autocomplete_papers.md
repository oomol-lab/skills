# Semantic Scholar · `autocomplete_papers`

Suggest Semantic Scholar paper query completions.

- **Service**: `semantic_scholar`
- **Action**: `autocomplete_papers`
- **Action id**: `semantic_scholar.autocomplete_papers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "semantic_scholar" --action "autocomplete_papers"
```

## Run

```bash
oo connector run "semantic_scholar" --action "autocomplete_papers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
