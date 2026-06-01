# Baidu Qianfan · `get_video_generation_task`

Fetch a Baidu Qianfan video generation task by its task identifier.

- **Service**: `qianfan`
- **Action**: `get_video_generation_task`
- **Action id**: `qianfan.get_video_generation_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "get_video_generation_task"
```

## Run

```bash
oo connector run "qianfan" --action "get_video_generation_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
