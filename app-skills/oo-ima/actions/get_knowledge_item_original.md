# ima · `get_knowledge_item_original`

Fetch access information for a knowledge-base item and download URL-backed original content through file transit when available.

- **Service**: `ima`
- **Action**: `get_knowledge_item_original`
- **Action id**: `ima.get_knowledge_item_original`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "get_knowledge_item_original"
```

## Run

```bash
oo connector run "ima" --action "get_knowledge_item_original" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
