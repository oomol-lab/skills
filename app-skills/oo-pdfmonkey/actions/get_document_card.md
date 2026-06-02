# PDFMonkey · `get_document_card`

Get one PDFMonkey document card for lightweight status polling without the full payload.

- **Service**: `pdfmonkey`
- **Action**: `get_document_card`
- **Action id**: `pdfmonkey.get_document_card`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pdfmonkey" --action "get_document_card"
```

## Run

```bash
oo connector run "pdfmonkey" --action "get_document_card" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
