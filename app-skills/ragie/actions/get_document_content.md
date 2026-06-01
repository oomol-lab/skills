# Ragie · `get_document_content`

Get Ragie document content in the requested media type, with optional byte range and download behavior.

- **Service**: `ragie`
- **Action**: `get_document_content`
- **Action id**: `ragie.get_document_content`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "get_document_content"
```

## Run

```bash
oo connector run "ragie" --action "get_document_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
