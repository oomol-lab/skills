# Google Photos · `batch_add_media_items`

Add existing Google Photos media items to an album.

- **Service**: `googlephotos`
- **Action**: `batch_add_media_items`
- **Action id**: `googlephotos.batch_add_media_items`
- **Required scopes**: googlephotos.organize

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "batch_add_media_items"
```

## Run

```bash
oo connector run "googlephotos" --action "batch_add_media_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Photos state. Confirm the exact payload and intended effect with the user before running.
