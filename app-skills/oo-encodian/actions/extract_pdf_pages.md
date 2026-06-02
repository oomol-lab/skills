# Encodian · `extract_pdf_pages`

Extract selected pages from one PDF document and return the resulting PDF file as base64 content.

- **Service**: `encodian`
- **Action**: `extract_pdf_pages`
- **Action id**: `encodian.extract_pdf_pages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "encodian" --action "extract_pdf_pages"
```

## Run

```bash
oo connector run "encodian" --action "extract_pdf_pages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
