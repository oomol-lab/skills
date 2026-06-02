# ima · `list_addable_knowledge_bases`

List the IMA knowledge bases that accept new content.

- **Service**: `ima`
- **Action**: `list_addable_knowledge_bases`
- **Action id**: `ima.list_addable_knowledge_bases`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "list_addable_knowledge_bases"
```

## Run

```bash
oo connector run "ima" --action "list_addable_knowledge_bases" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
