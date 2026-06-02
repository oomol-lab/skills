# OneDrive · `get_item`

Get metadata for a drive item by item ID or path.

- **Service**: `one_drive`
- **Action**: `get_item`
- **Action id**: `one_drive.get_item`
- **Required scopes**: one_drive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "one_drive" --action "get_item"
```

## Run

```bash
oo connector run "one_drive" --action "get_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
