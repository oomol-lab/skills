# Google Photos · `update_album`

Update a Google Photos album title or cover photo.

- **Service**: `googlephotos`
- **Action**: `update_album`
- **Action id**: `googlephotos.update_album`
- **Required scopes**: googlephotos.edit

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "update_album"
```

## Run

```bash
oo connector run "googlephotos" --action "update_album" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Photos state. Confirm the exact payload and intended effect with the user before running.
