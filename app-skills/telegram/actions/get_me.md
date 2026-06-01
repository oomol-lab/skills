# Telegram Bot · `get_me`

Validate the bot token and return the bot profile from Telegram Bot API.

- **Service**: `telegram`
- **Action**: `get_me`
- **Action id**: `telegram.get_me`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "get_me"
```

## Run

```bash
oo connector run "telegram" --action "get_me" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
