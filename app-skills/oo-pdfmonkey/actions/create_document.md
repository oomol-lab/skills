# PDFMonkey · `create_document`

Create a PDFMonkey document and optionally queue generation immediately by setting status to pending.

- **Service**: `pdfmonkey`
- **Action**: `create_document`
- **Action id**: `pdfmonkey.create_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pdfmonkey" --action "create_document"
```

## Run

```bash
oo connector run "pdfmonkey" --action "create_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PDFMonkey state. Confirm the exact payload and intended effect with the user before running.
