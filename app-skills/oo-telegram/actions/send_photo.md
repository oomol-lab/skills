# Telegram Bot · `send_photo`

Send a photo by URL or existing Telegram file_id. Multipart uploads are intentionally out of scope for this first pass.

- **Service**: `telegram`
- **Action**: `send_photo`
- **Action id**: `telegram.send_photo`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "send_photo"
```

## Run

```bash
oo connector run "telegram" --action "send_photo" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Telegram Bot state. Confirm the exact payload and intended effect with the user before running.
