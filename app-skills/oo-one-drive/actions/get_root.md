# OneDrive · `get_root`

Get metadata for the root folder of the current drive or a specific drive.

- **Service**: `one_drive`
- **Action**: `get_root`
- **Action id**: `one_drive.get_root`
- **Required scopes**: one_drive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "one_drive" --action "get_root"
```

## Run

```bash
oo connector run "one_drive" --action "get_root" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
