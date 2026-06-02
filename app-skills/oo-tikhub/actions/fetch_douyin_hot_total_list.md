# TikHub · `fetch_douyin_hot_total_list`

Fetch the public Douyin hot total list through TikHub. Requires the /api/v1/douyin/billboard/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `fetch_douyin_hot_total_list`
- **Action id**: `tikhub.fetch_douyin_hot_total_list`
- **Required scopes**: /api/v1/douyin/billboard/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "fetch_douyin_hot_total_list"
```

## Run

```bash
oo connector run "tikhub" --action "fetch_douyin_hot_total_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
