# Telegram Bot · `set_my_commands`

Set the bot command list exposed in Telegram clients.

- **Service**: `telegram`
- **Action**: `set_my_commands`
- **Action id**: `telegram.set_my_commands`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "set_my_commands"
```

## Run

```bash
oo connector run "telegram" --action "set_my_commands" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Telegram Bot state. Confirm the exact payload and intended effect with the user before running.
