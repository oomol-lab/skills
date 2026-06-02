# ima · `list_knowledge_items`

List files and folders inside one IMA knowledge-base folder.

- **Service**: `ima`
- **Action**: `list_knowledge_items`
- **Action id**: `ima.list_knowledge_items`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "list_knowledge_items"
```

## Run

```bash
oo connector run "ima" --action "list_knowledge_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
