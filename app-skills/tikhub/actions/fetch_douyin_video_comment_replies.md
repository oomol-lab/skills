# TikHub · `fetch_douyin_video_comment_replies`

Fetch public Douyin comment replies through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `fetch_douyin_video_comment_replies`
- **Action id**: `tikhub.fetch_douyin_video_comment_replies`
- **Required scopes**: /api/v1/douyin/web/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "fetch_douyin_video_comment_replies"
```

## Run

```bash
oo connector run "tikhub" --action "fetch_douyin_video_comment_replies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TikHub state. Confirm the exact payload and intended effect with the user before running.
