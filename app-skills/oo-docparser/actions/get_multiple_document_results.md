# Docparser · `get_multiple_document_results`

Retrieve parsed data for multiple documents of a specific parser with optional filtering, pagination, queue inclusion, and sorting.

- **Service**: `docparser`
- **Action**: `get_multiple_document_results`
- **Action id**: `docparser.get_multiple_document_results`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docparser" --action "get_multiple_document_results"
```

## Run

```bash
oo connector run "docparser" --action "get_multiple_document_results" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
