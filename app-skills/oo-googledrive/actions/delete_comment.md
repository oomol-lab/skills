# Google Drive · `delete_comment`

Permanently delete a comment thread from a Drive file.

- **Service**: `googledrive`
- **Action**: `delete_comment`
- **Action id**: `googledrive.delete_comment`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "delete_comment"
```

## Run

```bash
oo connector run "googledrive" --action "delete_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Drive data. Always confirm the target and get explicit user approval before running.
