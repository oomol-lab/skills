# TikHub · `fetch_tiktok_user_posts`

Fetch public TikTok posts for a user through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `fetch_tiktok_user_posts`
- **Action id**: `tikhub.fetch_tiktok_user_posts`
- **Required scopes**: /api/v1/tiktok/web/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "fetch_tiktok_user_posts"
```

## Run

```bash
oo connector run "tikhub" --action "fetch_tiktok_user_posts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
