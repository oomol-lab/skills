# Encodian · `secure_pdf_document`

Encrypt one PDF document with optional open and edit passwords, then return the protected PDF as base64 content.

- **Service**: `encodian`
- **Action**: `secure_pdf_document`
- **Action id**: `encodian.secure_pdf_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "encodian" --action "secure_pdf_document"
```

## Run

```bash
oo connector run "encodian" --action "secure_pdf_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
