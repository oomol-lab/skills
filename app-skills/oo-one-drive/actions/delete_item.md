# OneDrive · `delete_item`

Delete a drive item from OneDrive and move it to the recycle bin.

- **Service**: `one_drive`
- **Action**: `delete_item`
- **Action id**: `one_drive.delete_item`
- **Required scopes**: one_drive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "one_drive" --action "delete_item"
```

## Run

```bash
oo connector run "one_drive" --action "delete_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites OneDrive data. Always confirm the target and get explicit user approval before running.
