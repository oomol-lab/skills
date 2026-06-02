# Ragie · `get_document_summary`

Get the Ragie-generated summary for a specific document.

- **Service**: `ragie`
- **Action**: `get_document_summary`
- **Action id**: `ragie.get_document_summary`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "get_document_summary"
```

## Run

```bash
oo connector run "ragie" --action "get_document_summary" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
