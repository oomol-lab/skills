# Jimeng AI · `get_text_to_image_3_1_result`

Get the result of a Jimeng Text-to-Image 3.1 async task.

- **Service**: `jimeng_ai`
- **Action**: `get_text_to_image_3_1_result`
- **Action id**: `jimeng_ai.get_text_to_image_3_1_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jimeng_ai" --action "get_text_to_image_3_1_result"
```

## Run

```bash
oo connector run "jimeng_ai" --action "get_text_to_image_3_1_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
