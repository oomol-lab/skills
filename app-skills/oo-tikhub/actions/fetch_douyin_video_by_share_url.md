# TikHub · `fetch_douyin_video_by_share_url`

Fetch a public Douyin video detail by share URL through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `fetch_douyin_video_by_share_url`
- **Action id**: `tikhub.fetch_douyin_video_by_share_url`
- **Required scopes**: /api/v1/douyin/web/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "fetch_douyin_video_by_share_url"
```

## Run

```bash
oo connector run "tikhub" --action "fetch_douyin_video_by_share_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TikHub state. Confirm the exact payload and intended effect with the user before running.
