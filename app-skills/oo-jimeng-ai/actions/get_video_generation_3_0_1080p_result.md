# Jimeng AI · `get_video_generation_3_0_1080p_result`

Get the result of a Jimeng AI Video Generation 3.0 1080P async task.

- **Service**: `jimeng_ai`
- **Action**: `get_video_generation_3_0_1080p_result`
- **Action id**: `jimeng_ai.get_video_generation_3_0_1080p_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jimeng_ai" --action "get_video_generation_3_0_1080p_result"
```

## Run

```bash
oo connector run "jimeng_ai" --action "get_video_generation_3_0_1080p_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
