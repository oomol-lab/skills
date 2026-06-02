# Google Drive · `trash_file`

Move a Drive file or folder to trash without permanently deleting it.

- **Service**: `googledrive`
- **Action**: `trash_file`
- **Action id**: `googledrive.trash_file`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "trash_file"
```

## Run

```bash
oo connector run "googledrive" --action "trash_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Drive data. Always confirm the target and get explicit user approval before running.
