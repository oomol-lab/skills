# Jimeng AI · `submit_text_to_image_3_1`

Submit a Jimeng Text-to-Image 3.1 async task.

- **Service**: `jimeng_ai`
- **Action**: `submit_text_to_image_3_1`
- **Action id**: `jimeng_ai.submit_text_to_image_3_1`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jimeng_ai" --action "submit_text_to_image_3_1"
```

## Run

```bash
oo connector run "jimeng_ai" --action "submit_text_to_image_3_1" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Jimeng AI state. Confirm the exact payload and intended effect with the user before running.
