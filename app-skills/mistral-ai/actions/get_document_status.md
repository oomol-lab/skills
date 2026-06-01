# Mistral AI · `get_document_status`

Get the processing status of library document.

- **Service**: `mistral_ai`
- **Action**: `get_document_status`
- **Action id**: `mistral_ai.get_document_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "get_document_status"
```

## Run

```bash
oo connector run "mistral_ai" --action "get_document_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
