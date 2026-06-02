# TikHub · `fetch_douyin_user_posts`

Fetch public Douyin posts for a user through TikHub without exposing upstream cookies. Requires the /api/v1/douyin/web/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `fetch_douyin_user_posts`
- **Action id**: `tikhub.fetch_douyin_user_posts`
- **Required scopes**: /api/v1/douyin/web/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "fetch_douyin_user_posts"
```

## Run

```bash
oo connector run "tikhub" --action "fetch_douyin_user_posts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
