# Jimeng AI · `get_marketing_video_agent_result`

Get the result of a Lilinque Marketing Video Agent async task.

- **Service**: `jimeng_ai`
- **Action**: `get_marketing_video_agent_result`
- **Action id**: `jimeng_ai.get_marketing_video_agent_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jimeng_ai" --action "get_marketing_video_agent_result"
```

## Run

```bash
oo connector run "jimeng_ai" --action "get_marketing_video_agent_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
