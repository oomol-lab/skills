# Baidu Qianfan · `create_video_generation_task`

Create a Baidu Qianfan video generation task.

- **Service**: `qianfan`
- **Action**: `create_video_generation_task`
- **Action id**: `qianfan.create_video_generation_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "create_video_generation_task"
```

## Run

```bash
oo connector run "qianfan" --action "create_video_generation_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Baidu Qianfan state. Confirm the exact payload and intended effect with the user before running.
