# OOMOL Fusion API · `openai_image_async_result`

Get asynchronous OpenAI image generation result

- **Service**: `fusion-api`
- **Action**: `openai_image_async_result`
- **Action id**: `fusion-api.openai_image_async_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "openai_image_async_result"
```

## Run

```bash
oo connector run "fusion-api" --action "openai_image_async_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
