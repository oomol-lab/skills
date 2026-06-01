# Better Proposals · `list_document_types`

List Better Proposals document types with optional pagination.

- **Service**: `better_proposals`
- **Action**: `list_document_types`
- **Action id**: `better_proposals.list_document_types`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "list_document_types"
```

## Run

```bash
oo connector run "better_proposals" --action "list_document_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
