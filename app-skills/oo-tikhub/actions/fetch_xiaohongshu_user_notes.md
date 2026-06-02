# TikHub · `fetch_xiaohongshu_user_notes`

Fetch public Xiaohongshu user notes through TikHub App V2. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `fetch_xiaohongshu_user_notes`
- **Action id**: `tikhub.fetch_xiaohongshu_user_notes`
- **Required scopes**: /api/v1/xiaohongshu/app_v2/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "fetch_xiaohongshu_user_notes"
```

## Run

```bash
oo connector run "tikhub" --action "fetch_xiaohongshu_user_notes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
