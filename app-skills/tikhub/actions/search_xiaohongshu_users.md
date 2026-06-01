# TikHub · `search_xiaohongshu_users`

Search public Xiaohongshu users through TikHub. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `search_xiaohongshu_users`
- **Action id**: `tikhub.search_xiaohongshu_users`
- **Required scopes**: /api/v1/xiaohongshu/app_v2/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "search_xiaohongshu_users"
```

## Run

```bash
oo connector run "tikhub" --action "search_xiaohongshu_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
