# Ragie · `create_document_raw`

Create a Ragie document from raw text or JSON data when the content already exists in memory and does not need file upload.

- **Service**: `ragie`
- **Action**: `create_document_raw`
- **Action id**: `ragie.create_document_raw`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "create_document_raw"
```

## Run

```bash
oo connector run "ragie" --action "create_document_raw" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Ragie state. Confirm the exact payload and intended effect with the user before running.
