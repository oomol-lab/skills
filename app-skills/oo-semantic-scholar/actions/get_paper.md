# Semantic Scholar · `get_paper`

Get details for a Semantic Scholar paper by paper ID or external identifier.

- **Service**: `semantic_scholar`
- **Action**: `get_paper`
- **Action id**: `semantic_scholar.get_paper`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "semantic_scholar" --action "get_paper"
```

## Run

```bash
oo connector run "semantic_scholar" --action "get_paper" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
