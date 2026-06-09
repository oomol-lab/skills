# YouTube · `get_video_rating`

Get the authenticated user's rating for one or more YouTube videos.

- **Service**: `youtube`
- **Action**: `get_video_rating`
- **Action id**: `youtube.get_video_rating`
- **Required scopes**: youtube.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "get_video_rating"
```

## Run

```bash
oo connector run "youtube" --action "get_video_rating" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
