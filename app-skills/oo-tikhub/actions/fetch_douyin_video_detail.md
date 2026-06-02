# TikHub · `fetch_douyin_video_detail`

Fetch a public Douyin video detail through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `fetch_douyin_video_detail`
- **Action id**: `tikhub.fetch_douyin_video_detail`
- **Required scopes**: /api/v1/douyin/web/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "fetch_douyin_video_detail"
```

## Run

```bash
oo connector run "tikhub" --action "fetch_douyin_video_detail" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
