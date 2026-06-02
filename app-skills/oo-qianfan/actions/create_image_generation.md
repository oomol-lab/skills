# Baidu Qianfan · `create_image_generation`

Generate images with the Baidu Qianfan general image generation endpoint.

- **Service**: `qianfan`
- **Action**: `create_image_generation`
- **Action id**: `qianfan.create_image_generation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "create_image_generation"
```

## Run

```bash
oo connector run "qianfan" --action "create_image_generation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Baidu Qianfan state. Confirm the exact payload and intended effect with the user before running.
