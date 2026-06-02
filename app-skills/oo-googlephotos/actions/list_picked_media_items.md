# Google Photos · `list_picked_media_items`

List media items selected from the user's Google Photos library in a picker session.

- **Service**: `googlephotos`
- **Action**: `list_picked_media_items`
- **Action id**: `googlephotos.list_picked_media_items`
- **Required scopes**: googlephotos.pick

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "list_picked_media_items"
```

## Run

```bash
oo connector run "googlephotos" --action "list_picked_media_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
