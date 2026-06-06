# Google Drive · `drives.delete`

Permanently delete a shared drive.

- **Service**: `googledrive`
- **Action**: `drives.delete`
- **Action id**: `googledrive.drives.delete`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "drives.delete"
```

## Run

```bash
oo connector run "googledrive" --action "drives.delete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Drive data. Always confirm the target and get explicit user approval before running.
