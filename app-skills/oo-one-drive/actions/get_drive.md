# OneDrive · `get_drive`

Get metadata for the current drive or a specific drive.

- **Service**: `one_drive`
- **Action**: `get_drive`
- **Action id**: `one_drive.get_drive`
- **Required scopes**: one_drive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "one_drive" --action "get_drive"
```

## Run

```bash
oo connector run "one_drive" --action "get_drive" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
