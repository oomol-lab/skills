# Google Photos · `create_album`

Create a Google Photos album.

- **Service**: `googlephotos`
- **Action**: `create_album`
- **Action id**: `googlephotos.create_album`
- **Required scopes**: googlephotos.append

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "create_album"
```

## Run

```bash
oo connector run "googlephotos" --action "create_album" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Photos state. Confirm the exact payload and intended effect with the user before running.
