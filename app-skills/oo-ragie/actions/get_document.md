# Ragie · `get_document`

Get a single Ragie document by ID to inspect status, metadata, errors, and counts.

- **Service**: `ragie`
- **Action**: `get_document`
- **Action id**: `ragie.get_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "get_document"
```

## Run

```bash
oo connector run "ragie" --action "get_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
