# PDFMonkey · `get_document`

Get one full PDFMonkey document including its payload and generation logs.

- **Service**: `pdfmonkey`
- **Action**: `get_document`
- **Action id**: `pdfmonkey.get_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pdfmonkey" --action "get_document"
```

## Run

```bash
oo connector run "pdfmonkey" --action "get_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
