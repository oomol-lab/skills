# Mistral AI · `list_library_documents`

List all documents under the specified library.

- **Service**: `mistral_ai`
- **Action**: `list_library_documents`
- **Action id**: `mistral_ai.list_library_documents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "list_library_documents"
```

## Run

```bash
oo connector run "mistral_ai" --action "list_library_documents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
