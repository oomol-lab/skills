# Semantic Scholar · `get_author_papers`

List papers written by a Semantic Scholar author.

- **Service**: `semantic_scholar`
- **Action**: `get_author_papers`
- **Action id**: `semantic_scholar.get_author_papers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "semantic_scholar" --action "get_author_papers"
```

## Run

```bash
oo connector run "semantic_scholar" --action "get_author_papers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
