# Jimeng AI · `submit_smart_video_agent_1_0`

Submit a Lilinque Smart Video Agent 1.0 async task.

- **Service**: `jimeng_ai`
- **Action**: `submit_smart_video_agent_1_0`
- **Action id**: `jimeng_ai.submit_smart_video_agent_1_0`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jimeng_ai" --action "submit_smart_video_agent_1_0"
```

## Run

```bash
oo connector run "jimeng_ai" --action "submit_smart_video_agent_1_0" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Jimeng AI state. Confirm the exact payload and intended effect with the user before running.
