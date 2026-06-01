# TikHub · `fetch_xiaohongshu_hot_list`

Fetch the public Xiaohongshu hot list through TikHub. Requires the /api/v1/xiaohongshu/web_v2/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `fetch_xiaohongshu_hot_list`
- **Action id**: `tikhub.fetch_xiaohongshu_hot_list`
- **Required scopes**: /api/v1/xiaohongshu/web_v2/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "fetch_xiaohongshu_hot_list"
```

## Run

```bash
oo connector run "tikhub" --action "fetch_xiaohongshu_hot_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
