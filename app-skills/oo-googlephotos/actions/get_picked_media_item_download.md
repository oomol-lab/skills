# Google Photos · `get_picked_media_item_download`

Download a picked Google Photos media item through connector file transit using its trusted temporary base URL.

- **Service**: `googlephotos`
- **Action**: `get_picked_media_item_download`
- **Action id**: `googlephotos.get_picked_media_item_download`
- **Required scopes**: googlephotos.pick

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "get_picked_media_item_download"
```

## Run

```bash
oo connector run "googlephotos" --action "get_picked_media_item_download" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
