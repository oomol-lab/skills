# Feishu App Bot · `list_pins`

List pin records in one Feishu/Lark chat and time window.

- **Service**: `feishu_app_bot`
- **Action**: `list_pins`
- **Action id**: `feishu_app_bot.list_pins`
- **Required scopes**: im:message.pins:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "list_pins"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "list_pins" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
