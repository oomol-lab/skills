# Feishu App Bot · `remove_pin`

Remove the pin state from one Feishu/Lark message.

- **Service**: `feishu_app_bot`
- **Action**: `remove_pin`
- **Action id**: `feishu_app_bot.remove_pin`
- **Required scopes**: im:message.pins:write_only

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "remove_pin"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "remove_pin" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Feishu App Bot data. Always confirm the target and get explicit user approval before running.
