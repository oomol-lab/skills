# Pdfless · `list_document_templates`

List document templates in the current Pdfless workspace with optional pagination.

- **Service**: `pdfless`
- **Action**: `list_document_templates`
- **Action id**: `pdfless.list_document_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pdfless" --action "list_document_templates"
```

## Run

```bash
oo connector run "pdfless" --action "list_document_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
