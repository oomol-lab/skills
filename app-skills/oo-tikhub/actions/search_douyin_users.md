# TikHub · `search_douyin_users`

Search public Douyin users through TikHub. Requires the /api/v1/douyin/search/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `search_douyin_users`
- **Action id**: `tikhub.search_douyin_users`
- **Required scopes**: /api/v1/douyin/search/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "search_douyin_users"
```

## Run

```bash
oo connector run "tikhub" --action "search_douyin_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
