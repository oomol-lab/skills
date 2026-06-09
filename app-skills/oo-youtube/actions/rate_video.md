# YouTube · `rate_video`

Set or clear the authenticated user's rating for a YouTube video.

- **Service**: `youtube`
- **Action**: `rate_video`
- **Action id**: `youtube.rate_video`
- **Required scopes**: youtube.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "rate_video"
```

## Run

```bash
oo connector run "youtube" --action "rate_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
