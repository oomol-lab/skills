# Mistral AI · `get_document_signed_url`

Get a temporary signed link to the library document's original file.

- **Service**: `mistral_ai`
- **Action**: `get_document_signed_url`
- **Action id**: `mistral_ai.get_document_signed_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "get_document_signed_url"
```

## Run

```bash
oo connector run "mistral_ai" --action "get_document_signed_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
