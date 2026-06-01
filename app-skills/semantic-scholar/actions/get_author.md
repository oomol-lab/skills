# Semantic Scholar · `get_author`

Get details for a Semantic Scholar author.

- **Service**: `semantic_scholar`
- **Action**: `get_author`
- **Action id**: `semantic_scholar.get_author`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "semantic_scholar" --action "get_author"
```

## Run

```bash
oo connector run "semantic_scholar" --action "get_author" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
