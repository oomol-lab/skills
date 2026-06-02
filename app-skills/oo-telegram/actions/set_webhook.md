# Telegram Bot · `set_webhook`

Configure a webhook endpoint for update delivery.

- **Service**: `telegram`
- **Action**: `set_webhook`
- **Action id**: `telegram.set_webhook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "set_webhook"
```

## Run

```bash
oo connector run "telegram" --action "set_webhook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Telegram Bot state. Confirm the exact payload and intended effect with the user before running.
