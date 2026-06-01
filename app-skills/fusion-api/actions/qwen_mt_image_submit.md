# Oomol Fusion API · `qwen_mt_image_submit`

Image machine translation

- **Service**: `fusion-api`
- **Action**: `qwen_mt_image_submit`
- **Action id**: `fusion-api.qwen_mt_image_submit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "qwen_mt_image_submit"
```

## Run

```bash
oo connector run "fusion-api" --action "qwen_mt_image_submit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Oomol Fusion API state. Confirm the exact payload and intended effect with the user before running.
