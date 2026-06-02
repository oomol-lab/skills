# Foxit Cloud API · `compress_document`

Compress one PDF with a chosen Foxit compression level.

- **Service**: `fuxin`
- **Action**: `compress_document`
- **Action id**: `fuxin.compress_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "compress_document"
```

## Run

```bash
oo connector run "fuxin" --action "compress_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
