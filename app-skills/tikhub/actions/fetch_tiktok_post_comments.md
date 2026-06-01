# TikHub · `fetch_tiktok_post_comments`

Fetch public TikTok post comments through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `fetch_tiktok_post_comments`
- **Action id**: `tikhub.fetch_tiktok_post_comments`
- **Required scopes**: /api/v1/tiktok/web/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "fetch_tiktok_post_comments"
```

## Run

```bash
oo connector run "tikhub" --action "fetch_tiktok_post_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TikHub state. Confirm the exact payload and intended effect with the user before running.
