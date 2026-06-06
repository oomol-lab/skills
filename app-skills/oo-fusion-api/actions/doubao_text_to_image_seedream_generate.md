# OOMOL Fusion API · `doubao_text_to_image_seedream_generate`

Generate images from text with Doubao Seedream

- **Service**: `fusion-api`
- **Action**: `doubao_text_to_image_seedream_generate`
- **Action id**: `fusion-api.doubao_text_to_image_seedream_generate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "doubao_text_to_image_seedream_generate"
```

## Run

```bash
oo connector run "fusion-api" --action "doubao_text_to_image_seedream_generate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
