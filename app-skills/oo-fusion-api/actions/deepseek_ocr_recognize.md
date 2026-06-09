# OOMOL Fusion API · `deepseek_ocr_recognize`

Recognize text from a single image.

- **Service**: `fusion-api`
- **Action**: `deepseek_ocr_recognize`
- **Action id**: `fusion-api.deepseek_ocr_recognize`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "deepseek_ocr_recognize"
```

## Run

```bash
oo connector run "fusion-api" --action "deepseek_ocr_recognize" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
