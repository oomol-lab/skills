# Google Photos · `batch_create_media_items`

Batch create Google Photos media items from URLs or base64 payloads.

- **Service**: `googlephotos`
- **Action**: `batch_create_media_items`
- **Action id**: `googlephotos.batch_create_media_items`
- **Required scopes**: googlephotos.append

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "batch_create_media_items"
```

## Run

```bash
oo connector run "googlephotos" --action "batch_create_media_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Photos state. Confirm the exact payload and intended effect with the user before running.
