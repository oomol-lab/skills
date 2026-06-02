# Google Photos · `batch_get_media_items`

Fetch multiple Google Photos media items by ID.

- **Service**: `googlephotos`
- **Action**: `batch_get_media_items`
- **Action id**: `googlephotos.batch_get_media_items`
- **Required scopes**: googlephotos.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "batch_get_media_items"
```

## Run

```bash
oo connector run "googlephotos" --action "batch_get_media_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
