# Ragie · `get_document_chunks`

List the chunks of a Ragie document with cursor pagination and optional start/end index filtering.

- **Service**: `ragie`
- **Action**: `get_document_chunks`
- **Action id**: `ragie.get_document_chunks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "get_document_chunks"
```

## Run

```bash
oo connector run "ragie" --action "get_document_chunks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
