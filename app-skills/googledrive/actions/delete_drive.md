# Google Drive · `delete_drive`

Permanently delete a shared drive.

- **Service**: `googledrive`
- **Action**: `delete_drive`
- **Action id**: `googledrive.delete_drive`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "delete_drive"
```

## Run

```bash
oo connector run "googledrive" --action "delete_drive" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Drive data. Always confirm the target and get explicit user approval before running.
