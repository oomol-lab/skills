# Encodian · `compress_pdf`

Compress one PDF document with Encodian and return the optimized PDF file as base64 content.

- **Service**: `encodian`
- **Action**: `compress_pdf`
- **Action id**: `encodian.compress_pdf`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "encodian" --action "compress_pdf"
```

## Run

```bash
oo connector run "encodian" --action "compress_pdf" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
