# Foxit Cloud API · `ocr_document`

Run OCR on one PDF or image document with Foxit.

- **Service**: `fuxin`
- **Action**: `ocr_document`
- **Action id**: `fuxin.ocr_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "ocr_document"
```

## Run

```bash
oo connector run "fuxin" --action "ocr_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
