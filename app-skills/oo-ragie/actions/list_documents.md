# Ragie · `list_documents`

List Ragie documents with filter, cursor pagination, and optional partition scoping to inspect ingestion progress.

- **Service**: `ragie`
- **Action**: `list_documents`
- **Action id**: `ragie.list_documents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "list_documents"
```

## Run

```bash
oo connector run "ragie" --action "list_documents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
