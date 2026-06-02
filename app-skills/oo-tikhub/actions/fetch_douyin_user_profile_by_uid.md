# TikHub · `fetch_douyin_user_profile_by_uid`

Fetch a public Douyin user profile by UID through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `fetch_douyin_user_profile_by_uid`
- **Action id**: `tikhub.fetch_douyin_user_profile_by_uid`
- **Required scopes**: /api/v1/douyin/web/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "fetch_douyin_user_profile_by_uid"
```

## Run

```bash
oo connector run "tikhub" --action "fetch_douyin_user_profile_by_uid" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
