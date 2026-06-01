# Encodian · `get_pdf_text_layer`

Extract the text layer from one PDF document with optional page-range and encoding controls.

- **Service**: `encodian`
- **Action**: `get_pdf_text_layer`
- **Action id**: `encodian.get_pdf_text_layer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "encodian" --action "get_pdf_text_layer"
```

## Run

```bash
oo connector run "encodian" --action "get_pdf_text_layer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
