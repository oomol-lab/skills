# Google Photos · `list_albums`

List Google Photos albums visible to the current application connection. If you need the user to choose from their existing Google Photos library, use the Picker actions instead.

- **Service**: `googlephotos`
- **Action**: `list_albums`
- **Action id**: `googlephotos.list_albums`
- **Required scopes**: googlephotos.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "list_albums"
```

## Run

```bash
oo connector run "googlephotos" --action "list_albums" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
