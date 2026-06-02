# Baidu Qianfan · `list_video_generation_tasks`

List Baidu Qianfan video generation tasks with optional filters.

- **Service**: `qianfan`
- **Action**: `list_video_generation_tasks`
- **Action id**: `qianfan.list_video_generation_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "list_video_generation_tasks"
```

## Run

```bash
oo connector run "qianfan" --action "list_video_generation_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
