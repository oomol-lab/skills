# Google Drive · `delete_file`

Legacy compatibility alias for permanently deleting a Drive file by ID.

- **Service**: `googledrive`
- **Action**: `delete_file`
- **Action id**: `googledrive.delete_file`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "delete_file"
```

## Run

```bash
oo connector run "googledrive" --action "delete_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Drive data. Always confirm the target and get explicit user approval before running.
