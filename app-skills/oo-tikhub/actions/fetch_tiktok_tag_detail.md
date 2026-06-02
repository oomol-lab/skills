# TikHub · `fetch_tiktok_tag_detail`

Fetch a public TikTok tag detail through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `fetch_tiktok_tag_detail`
- **Action id**: `tikhub.fetch_tiktok_tag_detail`
- **Required scopes**: /api/v1/tiktok/web/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "fetch_tiktok_tag_detail"
```

## Run

```bash
oo connector run "tikhub" --action "fetch_tiktok_tag_detail" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
