# Docsumo · `upload_document_from_url`

Upload one public file URL to Docsumo for a chosen document type and return the queued document metadata.

- **Service**: `docsumo`
- **Action**: `upload_document_from_url`
- **Action id**: `docsumo.upload_document_from_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docsumo" --action "upload_document_from_url"
```

## Run

```bash
oo connector run "docsumo" --action "upload_document_from_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Docsumo state. Confirm the exact payload and intended effect with the user before running.
