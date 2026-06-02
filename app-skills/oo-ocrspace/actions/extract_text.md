# OCR.space · `extract_text`

Extract text from a public image or uploaded Base64 file by calling OCR.space and returning normalized page results.

- **Service**: `ocrspace`
- **Action**: `extract_text`
- **Action id**: `ocrspace.extract_text`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ocrspace" --action "extract_text"
```

## Run

```bash
oo connector run "ocrspace" --action "extract_text" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
