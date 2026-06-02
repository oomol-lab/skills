# Feishu App Bot · `download_image`

Download one Feishu/Lark image by image key and upload it to transit storage.

- **Service**: `feishu_app_bot`
- **Action**: `download_image`
- **Action id**: `feishu_app_bot.download_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "download_image"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "download_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
