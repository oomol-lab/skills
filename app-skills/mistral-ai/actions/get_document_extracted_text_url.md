# Mistral AI · `get_document_extracted_text_url`

Get a temporary signed link to a text file extracted from library document.

- **Service**: `mistral_ai`
- **Action**: `get_document_extracted_text_url`
- **Action id**: `mistral_ai.get_document_extracted_text_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "get_document_extracted_text_url"
```

## Run

```bash
oo connector run "mistral_ai" --action "get_document_extracted_text_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
