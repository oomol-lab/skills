# Google Drive · `files.delete`

Permanently delete a Drive file or folder by ID.

- **Service**: `googledrive`
- **Action**: `files.delete`
- **Action id**: `googledrive.files.delete`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "files.delete"
```

## Run

```bash
oo connector run "googledrive" --action "files.delete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Drive data. Always confirm the target and get explicit user approval before running.
