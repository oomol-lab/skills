# Encodian · `unlock_pdf_document`

Remove password protection from one PDF document and return the unlocked PDF as base64 content.

- **Service**: `encodian`
- **Action**: `unlock_pdf_document`
- **Action id**: `encodian.unlock_pdf_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "encodian" --action "unlock_pdf_document"
```

## Run

```bash
oo connector run "encodian" --action "unlock_pdf_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
