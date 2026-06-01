# Feishu App Bot · `recall_message`

Recall one Feishu/Lark message that the app bot sent.

- **Service**: `feishu_app_bot`
- **Action**: `recall_message`
- **Action id**: `feishu_app_bot.recall_message`
- **Required scopes**: im:message:recall

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "recall_message"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "recall_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
