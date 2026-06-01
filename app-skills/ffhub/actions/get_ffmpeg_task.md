# FFHub · `get_ffmpeg_task`

Get the current status, timing, error, and output files for one FFHub FFmpeg task.

- **Service**: `ffhub`
- **Action**: `get_ffmpeg_task`
- **Action id**: `ffhub.get_ffmpeg_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ffhub" --action "get_ffmpeg_task"
```

## Run

```bash
oo connector run "ffhub" --action "get_ffmpeg_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
