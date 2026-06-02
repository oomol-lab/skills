# Outline · `list_documents`

List Outline documents visible to the authenticated user with optional collection, user, parent, status, pagination, and sorting filters.

- **Service**: `outline`
- **Action**: `list_documents`
- **Action id**: `outline.list_documents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outline" --action "list_documents"
```

## Run

```bash
oo connector run "outline" --action "list_documents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
