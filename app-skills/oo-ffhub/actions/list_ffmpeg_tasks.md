# FFHub · `list_ffmpeg_tasks`

List FFHub FFmpeg tasks with optional customer, status, limit, and offset filters.

- **Service**: `ffhub`
- **Action**: `list_ffmpeg_tasks`
- **Action id**: `ffhub.list_ffmpeg_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ffhub" --action "list_ffmpeg_tasks"
```

## Run

```bash
oo connector run "ffhub" --action "list_ffmpeg_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
