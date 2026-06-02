# Telegram Bot · `delete_webhook`

Delete the configured webhook and optionally drop pending updates.

- **Service**: `telegram`
- **Action**: `delete_webhook`
- **Action id**: `telegram.delete_webhook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "delete_webhook"
```

## Run

```bash
oo connector run "telegram" --action "delete_webhook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Telegram Bot data. Always confirm the target and get explicit user approval before running.
