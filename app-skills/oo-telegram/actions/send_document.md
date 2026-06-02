# Telegram Bot · `send_document`

Send a document by URL or existing Telegram file_id. Multipart uploads are intentionally out of scope for this provider pass.

- **Service**: `telegram`
- **Action**: `send_document`
- **Action id**: `telegram.send_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "send_document"
```

## Run

```bash
oo connector run "telegram" --action "send_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Telegram Bot state. Confirm the exact payload and intended effect with the user before running.
