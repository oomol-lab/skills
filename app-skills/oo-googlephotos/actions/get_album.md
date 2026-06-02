# Google Photos · `get_album`

Fetch one Google Photos album by ID.

- **Service**: `googlephotos`
- **Action**: `get_album`
- **Action id**: `googlephotos.get_album`
- **Required scopes**: googlephotos.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "get_album"
```

## Run

```bash
oo connector run "googlephotos" --action "get_album" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
