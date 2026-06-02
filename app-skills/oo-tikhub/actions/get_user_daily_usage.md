# TikHub · `get_user_daily_usage`

Get the current TikHub account daily API usage. Requires the /api/v1/tikhub/user/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `get_user_daily_usage`
- **Action id**: `tikhub.get_user_daily_usage`
- **Required scopes**: /api/v1/tikhub/user/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "get_user_daily_usage"
```

## Run

```bash
oo connector run "tikhub" --action "get_user_daily_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
