# Feishu App Bot · `remove_message_reaction`

Remove one Feishu/Lark message reaction by `reaction_id`.

- **Service**: `feishu_app_bot`
- **Action**: `remove_message_reaction`
- **Action id**: `feishu_app_bot.remove_message_reaction`
- **Required scopes**: im:message.reactions:write_only

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "remove_message_reaction"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "remove_message_reaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Feishu App Bot data. Always confirm the target and get explicit user approval before running.
