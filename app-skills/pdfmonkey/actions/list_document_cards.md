# PDFMonkey · `list_document_cards`

List PDFMonkey document cards with optional filters for template, status, workspace, update time, and search text.

- **Service**: `pdfmonkey`
- **Action**: `list_document_cards`
- **Action id**: `pdfmonkey.list_document_cards`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pdfmonkey" --action "list_document_cards"
```

## Run

```bash
oo connector run "pdfmonkey" --action "list_document_cards" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
