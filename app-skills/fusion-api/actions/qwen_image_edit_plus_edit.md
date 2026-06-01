# Oomol Fusion API · `qwen_image_edit_plus_edit`

Edit images with Tongyi Wanxiang

- **Service**: `fusion-api`
- **Action**: `qwen_image_edit_plus_edit`
- **Action id**: `fusion-api.qwen_image_edit_plus_edit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "qwen_image_edit_plus_edit"
```

## Run

```bash
oo connector run "fusion-api" --action "qwen_image_edit_plus_edit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Oomol Fusion API state. Confirm the exact payload and intended effect with the user before running.
