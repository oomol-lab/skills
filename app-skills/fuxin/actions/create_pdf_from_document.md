# Foxit Cloud API · `create_pdf_from_document`

Create a PDF from a Word, Excel, PowerPoint, image, or text source in Foxit.

- **Service**: `fuxin`
- **Action**: `create_pdf_from_document`
- **Action id**: `fuxin.create_pdf_from_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "create_pdf_from_document"
```

## Run

```bash
oo connector run "fuxin" --action "create_pdf_from_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Foxit Cloud API state. Confirm the exact payload and intended effect with the user before running.
