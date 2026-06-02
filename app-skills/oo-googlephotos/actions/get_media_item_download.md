# Google Photos · `get_media_item_download`

Download a Google Photos Library API media item created by this application through connector file transit.

- **Service**: `googlephotos`
- **Action**: `get_media_item_download`
- **Action id**: `googlephotos.get_media_item_download`
- **Required scopes**: googlephotos.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "get_media_item_download"
```

## Run

```bash
oo connector run "googlephotos" --action "get_media_item_download" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
