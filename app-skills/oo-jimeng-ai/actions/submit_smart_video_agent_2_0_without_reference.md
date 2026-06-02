# Jimeng AI · `submit_smart_video_agent_2_0_without_reference`

Submit a Lilinque Smart Video Agent 2.0 async task without reference videos.

- **Service**: `jimeng_ai`
- **Action**: `submit_smart_video_agent_2_0_without_reference`
- **Action id**: `jimeng_ai.submit_smart_video_agent_2_0_without_reference`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jimeng_ai" --action "submit_smart_video_agent_2_0_without_reference"
```

## Run

```bash
oo connector run "jimeng_ai" --action "submit_smart_video_agent_2_0_without_reference" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Jimeng AI state. Confirm the exact payload and intended effect with the user before running.
