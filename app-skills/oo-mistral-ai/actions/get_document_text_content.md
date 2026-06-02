# Mistral AI · `get_document_text_content`

Get the extracted text content of the library document.

- **Service**: `mistral_ai`
- **Action**: `get_document_text_content`
- **Action id**: `mistral_ai.get_document_text_content`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "get_document_text_content"
```

## Run

```bash
oo connector run "mistral_ai" --action "get_document_text_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
