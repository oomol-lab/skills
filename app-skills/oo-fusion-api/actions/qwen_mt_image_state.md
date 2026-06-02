# Oomol Fusion API · `qwen_mt_image_state`

Get qwen-mt-image task state

- **Service**: `fusion-api`
- **Action**: `qwen_mt_image_state`
- **Action id**: `fusion-api.qwen_mt_image_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "qwen_mt_image_state"
```

## Run

```bash
oo connector run "fusion-api" --action "qwen_mt_image_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
