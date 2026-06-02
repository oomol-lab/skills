# PDFMonkey · `get_document_template`

Get one full PDFMonkey document template including draft and published fields.

- **Service**: `pdfmonkey`
- **Action**: `get_document_template`
- **Action id**: `pdfmonkey.get_document_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pdfmonkey" --action "get_document_template"
```

## Run

```bash
oo connector run "pdfmonkey" --action "get_document_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
