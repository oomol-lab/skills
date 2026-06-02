# Foxit Cloud API · `extract_document`

Extract text or embedded images from one PDF with Foxit.

- **Service**: `fuxin`
- **Action**: `extract_document`
- **Action id**: `fuxin.extract_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "extract_document"
```

## Run

```bash
oo connector run "fuxin" --action "extract_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
