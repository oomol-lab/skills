# Foxit Cloud API · `create_pdf_from_html`

Create a PDF from HTML content, an HTML file, or a webpage URL in Foxit.

- **Service**: `fuxin`
- **Action**: `create_pdf_from_html`
- **Action id**: `fuxin.create_pdf_from_html`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "create_pdf_from_html"
```

## Run

```bash
oo connector run "fuxin" --action "create_pdf_from_html" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Foxit Cloud API state. Confirm the exact payload and intended effect with the user before running.
