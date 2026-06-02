# Outline · `list_collection_documents`

Retrieve the document tree for one Outline collection by UUID.

- **Service**: `outline`
- **Action**: `list_collection_documents`
- **Action id**: `outline.list_collection_documents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outline" --action "list_collection_documents"
```

## Run

```bash
oo connector run "outline" --action "list_collection_documents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
