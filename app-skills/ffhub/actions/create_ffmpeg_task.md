# FFHub · `create_ffmpeg_task`

Create a new FFHub FFmpeg transcoding task from a full FFmpeg command or argument-only command string.

- **Service**: `ffhub`
- **Action**: `create_ffmpeg_task`
- **Action id**: `ffhub.create_ffmpeg_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ffhub" --action "create_ffmpeg_task"
```

## Run

```bash
oo connector run "ffhub" --action "create_ffmpeg_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes FFHub state. Confirm the exact payload and intended effect with the user before running.
