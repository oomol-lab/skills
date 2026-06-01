# Jimeng AI · `submit_video_generation_3_0_pro`

Submit a Jimeng AI Video Generation 3.0 Pro async task.

- **Service**: `jimeng_ai`
- **Action**: `submit_video_generation_3_0_pro`
- **Action id**: `jimeng_ai.submit_video_generation_3_0_pro`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jimeng_ai" --action "submit_video_generation_3_0_pro"
```

## Run

```bash
oo connector run "jimeng_ai" --action "submit_video_generation_3_0_pro" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Jimeng AI state. Confirm the exact payload and intended effect with the user before running.
