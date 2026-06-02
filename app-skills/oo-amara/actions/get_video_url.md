# Amara · `get_video_url`

Fetch a single Amara video URL entry by video ID and URL ID.

- **Service**: `amara`
- **Action**: `get_video_url`
- **Action id**: `amara.get_video_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "get_video_url"
```

## Run

```bash
oo connector run "amara" --action "get_video_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
