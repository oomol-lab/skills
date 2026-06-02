# Jimeng AI · `submit_image_generation_4_6`

Submit a Jimeng AI Image Generation 4.6 async task.

- **Service**: `jimeng_ai`
- **Action**: `submit_image_generation_4_6`
- **Action id**: `jimeng_ai.submit_image_generation_4_6`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jimeng_ai" --action "submit_image_generation_4_6"
```

## Run

```bash
oo connector run "jimeng_ai" --action "submit_image_generation_4_6" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Jimeng AI state. Confirm the exact payload and intended effect with the user before running.
