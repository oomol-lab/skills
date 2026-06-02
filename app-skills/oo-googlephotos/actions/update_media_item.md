# Google Photos · `update_media_item`

Update a Google Photos media item description.

- **Service**: `googlephotos`
- **Action**: `update_media_item`
- **Action id**: `googlephotos.update_media_item`
- **Required scopes**: googlephotos.edit

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "update_media_item"
```

## Run

```bash
oo connector run "googlephotos" --action "update_media_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Photos state. Confirm the exact payload and intended effect with the user before running.
