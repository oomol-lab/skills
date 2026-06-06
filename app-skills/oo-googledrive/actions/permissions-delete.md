# Google Drive · `permissions.delete`

Delete a permission from a Drive file or shared drive.

- **Service**: `googledrive`
- **Action**: `permissions.delete`
- **Action id**: `googledrive.permissions.delete`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "permissions.delete"
```

## Run

```bash
oo connector run "googledrive" --action "permissions.delete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Drive data. Always confirm the target and get explicit user approval before running.
