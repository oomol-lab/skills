# PDFMonkey · `list_document_template_cards`

List PDFMonkey document template cards for one workspace with optional folder, page, and sort filters.

- **Service**: `pdfmonkey`
- **Action**: `list_document_template_cards`
- **Action id**: `pdfmonkey.list_document_template_cards`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pdfmonkey" --action "list_document_template_cards"
```

## Run

```bash
oo connector run "pdfmonkey" --action "list_document_template_cards" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
