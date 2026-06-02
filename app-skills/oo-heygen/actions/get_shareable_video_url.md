# HeyGen · `get_shareable_video_url`

Retrieve a public share URL for a rendered HeyGen video by video ID.

- **Service**: `heygen`
- **Action**: `get_shareable_video_url`
- **Action id**: `heygen.get_shareable_video_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "get_shareable_video_url"
```

## Run

```bash
oo connector run "heygen" --action "get_shareable_video_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
