# Jimeng AI · `get_image_generation_4_6_result`

Get the result of a Jimeng AI Image Generation 4.6 async task.

- **Service**: `jimeng_ai`
- **Action**: `get_image_generation_4_6_result`
- **Action id**: `jimeng_ai.get_image_generation_4_6_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jimeng_ai" --action "get_image_generation_4_6_result"
```

## Run

```bash
oo connector run "jimeng_ai" --action "get_image_generation_4_6_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
