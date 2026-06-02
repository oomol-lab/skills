# Oomol Fusion API · `qwen_mt_image_result`

Get qwen-mt-image task result

- **Service**: `fusion-api`
- **Action**: `qwen_mt_image_result`
- **Action id**: `fusion-api.qwen_mt_image_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "qwen_mt_image_result"
```

## Run

```bash
oo connector run "fusion-api" --action "qwen_mt_image_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
