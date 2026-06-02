# TikHub · `search_tiktok_videos`

Search public TikTok videos through TikHub without exposing upstream cookies. Requires the /api/v1/tiktok/web/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `search_tiktok_videos`
- **Action id**: `tikhub.search_tiktok_videos`
- **Required scopes**: /api/v1/tiktok/web/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "search_tiktok_videos"
```

## Run

```bash
oo connector run "tikhub" --action "search_tiktok_videos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
