# Google Drive · `google_drive_delete_folder_or_file_action`

Permanently delete a Drive file or folder by ID.

- **Service**: `googledrive`
- **Action**: `google_drive_delete_folder_or_file_action`
- **Action id**: `googledrive.google_drive_delete_folder_or_file_action`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "google_drive_delete_folder_or_file_action"
```

## Run

```bash
oo connector run "googledrive" --action "google_drive_delete_folder_or_file_action" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Drive data. Always confirm the target and get explicit user approval before running.
