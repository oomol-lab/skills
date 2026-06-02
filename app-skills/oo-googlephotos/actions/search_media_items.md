# Google Photos · `search_media_items`

Search Google Photos Library API media items created by this application.

- **Service**: `googlephotos`
- **Action**: `search_media_items`
- **Action id**: `googlephotos.search_media_items`
- **Required scopes**: googlephotos.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "search_media_items"
```

## Run

```bash
oo connector run "googlephotos" --action "search_media_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
