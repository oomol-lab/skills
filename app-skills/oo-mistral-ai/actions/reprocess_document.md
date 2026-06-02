# Mistral AI · `reprocess_document`

Reprocess the specified library document.

- **Service**: `mistral_ai`
- **Action**: `reprocess_document`
- **Action id**: `mistral_ai.reprocess_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "reprocess_document"
```

## Run

```bash
oo connector run "mistral_ai" --action "reprocess_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
