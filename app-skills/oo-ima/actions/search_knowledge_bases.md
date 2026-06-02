# ima · `search_knowledge_bases`

Search IMA knowledge bases by name, or pass an empty query to list accessible knowledge bases.

- **Service**: `ima`
- **Action**: `search_knowledge_bases`
- **Action id**: `ima.search_knowledge_bases`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "search_knowledge_bases"
```

## Run

```bash
oo connector run "ima" --action "search_knowledge_bases" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
