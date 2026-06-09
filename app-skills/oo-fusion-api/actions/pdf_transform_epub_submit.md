# OOMOL Fusion API · `pdf_transform_epub_submit`

Convert a PDF to EPUB format

- **Service**: `fusion-api`
- **Action**: `pdf_transform_epub_submit`
- **Action id**: `fusion-api.pdf_transform_epub_submit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "pdf_transform_epub_submit"
```

## Run

```bash
oo connector run "fusion-api" --action "pdf_transform_epub_submit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OOMOL Fusion API state. Confirm the exact payload and intended effect with the user before running.
