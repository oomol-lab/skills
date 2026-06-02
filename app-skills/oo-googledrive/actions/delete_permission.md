# Google Drive · `delete_permission`

Delete a permission from a Drive file or shared drive.

- **Service**: `googledrive`
- **Action**: `delete_permission`
- **Action id**: `googledrive.delete_permission`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "delete_permission"
```

## Run

```bash
oo connector run "googledrive" --action "delete_permission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Drive data. Always confirm the target and get explicit user approval before running.
