# Telegram Bot · `get_updates`

Poll pending updates for the bot. Use this only when webhook delivery is disabled or for debugging.

- **Service**: `telegram`
- **Action**: `get_updates`
- **Action id**: `telegram.get_updates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "get_updates"
```

## Run

```bash
oo connector run "telegram" --action "get_updates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
