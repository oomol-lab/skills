# OOMOL Fusion API · `qwen_image_generate`

Generate images with Tongyi Qianwen

- **Service**: `fusion-api`
- **Action**: `qwen_image_generate`
- **Action id**: `fusion-api.qwen_image_generate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "qwen_image_generate"
```

## Run

```bash
oo connector run "fusion-api" --action "qwen_image_generate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
