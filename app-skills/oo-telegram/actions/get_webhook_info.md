# Telegram Bot · `get_webhook_info`

Return the webhook status configured for the bot.

- **Service**: `telegram`
- **Action**: `get_webhook_info`
- **Action id**: `telegram.get_webhook_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "get_webhook_info"
```

## Run

```bash
oo connector run "telegram" --action "get_webhook_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
