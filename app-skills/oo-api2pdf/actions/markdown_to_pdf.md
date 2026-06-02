# API2PDF · `markdown_to_pdf`

Convert raw Markdown to PDF with API2PDF and return the generated PDF URL plus conversion metadata.

- **Service**: `api2pdf`
- **Action**: `markdown_to_pdf`
- **Action id**: `api2pdf.markdown_to_pdf`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api2pdf" --action "markdown_to_pdf"
```

## Run

```bash
oo connector run "api2pdf" --action "markdown_to_pdf" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
