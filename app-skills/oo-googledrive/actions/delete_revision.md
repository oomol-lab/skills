# Google Drive · `delete_revision`

Permanently delete a specific revision from a Drive file.

- **Service**: `googledrive`
- **Action**: `delete_revision`
- **Action id**: `googledrive.delete_revision`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "delete_revision"
```

## Run

```bash
oo connector run "googledrive" --action "delete_revision" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Drive data. Always confirm the target and get explicit user approval before running.
