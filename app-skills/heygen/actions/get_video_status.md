# HeyGen · `get_video_status`

Retrieve processing status and download URLs for a HeyGen video by video ID.

- **Service**: `heygen`
- **Action**: `get_video_status`
- **Action id**: `heygen.get_video_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "get_video_status"
```

## Run

```bash
oo connector run "heygen" --action "get_video_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
