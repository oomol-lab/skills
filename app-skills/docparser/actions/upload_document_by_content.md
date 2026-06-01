# Docparser · `upload_document_by_content`

Upload a document to a Docparser parser by sending base64-encoded file content and an optional file name.

- **Service**: `docparser`
- **Action**: `upload_document_by_content`
- **Action id**: `docparser.upload_document_by_content`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docparser" --action "upload_document_by_content"
```

## Run

```bash
oo connector run "docparser" --action "upload_document_by_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Docparser state. Confirm the exact payload and intended effect with the user before running.
