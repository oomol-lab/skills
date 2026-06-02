# Mistral AI · `upload_library_document`

Uploads a new document to the specified library.

- **Service**: `mistral_ai`
- **Action**: `upload_library_document`
- **Action id**: `mistral_ai.upload_library_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "upload_library_document"
```

## Run

```bash
oo connector run "mistral_ai" --action "upload_library_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mistral AI state. Confirm the exact payload and intended effect with the user before running.
