# Feishu App Bot · `upload_file`

Upload one public file URL to Feishu/Lark and return the file key for message sending.

- **Service**: `feishu_app_bot`
- **Action**: `upload_file`
- **Action id**: `feishu_app_bot.upload_file`
- **Required scopes**: im:resource

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "upload_file"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "upload_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Feishu App Bot state. Confirm the exact payload and intended effect with the user before running.
