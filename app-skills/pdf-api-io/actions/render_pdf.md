# PDF-API.io · `render_pdf`

Render one PDF-API.io template with JSON data and return the temporary hosted PDF URL.

- **Service**: `pdf_api_io`
- **Action**: `render_pdf`
- **Action id**: `pdf_api_io.render_pdf`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pdf_api_io" --action "render_pdf"
```

## Run

```bash
oo connector run "pdf_api_io" --action "render_pdf" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
