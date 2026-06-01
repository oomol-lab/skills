# Google Docs · `export_document_as_pdf`

Export a Google Docs file as a PDF through Google Drive. Google Drive limits export content to roughly 10 MB.

- **Service**: `googledocs`
- **Action**: `export_document_as_pdf`
- **Action id**: `googledocs.export_document_as_pdf`
- **Required scopes**: googledocs.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "export_document_as_pdf"
```

## Run

```bash
oo connector run "googledocs" --action "export_document_as_pdf" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
