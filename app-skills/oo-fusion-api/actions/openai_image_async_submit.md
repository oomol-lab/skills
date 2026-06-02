# Oomol Fusion API · `openai_image_async_submit`

Submit asynchronous OpenAI image generation requests, including gpt-image-2 image creation.

- **Service**: `fusion-api`
- **Action**: `openai_image_async_submit`
- **Action id**: `fusion-api.openai_image_async_submit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "openai_image_async_submit"
```

## Run

```bash
oo connector run "fusion-api" --action "openai_image_async_submit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Oomol Fusion API state. Confirm the exact payload and intended effect with the user before running.
