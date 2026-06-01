# TikHub · `fetch_xiaohongshu_note_comment_replies`

Fetch public Xiaohongshu note comment replies through TikHub App V2. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `fetch_xiaohongshu_note_comment_replies`
- **Action id**: `tikhub.fetch_xiaohongshu_note_comment_replies`
- **Required scopes**: /api/v1/xiaohongshu/app_v2/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "fetch_xiaohongshu_note_comment_replies"
```

## Run

```bash
oo connector run "tikhub" --action "fetch_xiaohongshu_note_comment_replies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TikHub state. Confirm the exact payload and intended effect with the user before running.
