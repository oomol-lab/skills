# ima · `get_knowledge_bases`

Fetch metadata for one or more IMA knowledge bases.

- **Service**: `ima`
- **Action**: `get_knowledge_bases`
- **Action id**: `ima.get_knowledge_bases`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "get_knowledge_bases"
```

## Run

```bash
oo connector run "ima" --action "get_knowledge_bases" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
