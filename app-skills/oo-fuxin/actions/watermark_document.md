# Foxit Cloud API · `watermark_document`

Add a text or image watermark to one PDF with Foxit.

- **Service**: `fuxin`
- **Action**: `watermark_document`
- **Action id**: `fuxin.watermark_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "watermark_document"
```

## Run

```bash
oo connector run "fuxin" --action "watermark_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
