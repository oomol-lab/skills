# Mistral AI · `get_library_document`

Get details of a single library document.

- **Service**: `mistral_ai`
- **Action**: `get_library_document`
- **Action id**: `mistral_ai.get_library_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "get_library_document"
```

## Run

```bash
oo connector run "mistral_ai" --action "get_library_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
