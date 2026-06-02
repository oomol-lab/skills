# Baidu Qianfan · `cancel_video_generation_task`

Cancel a Baidu Qianfan video generation task by its task identifier.

- **Service**: `qianfan`
- **Action**: `cancel_video_generation_task`
- **Action id**: `qianfan.cancel_video_generation_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "cancel_video_generation_task"
```

## Run

```bash
oo connector run "qianfan" --action "cancel_video_generation_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
