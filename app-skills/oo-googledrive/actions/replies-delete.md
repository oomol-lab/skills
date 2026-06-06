# Google Drive · `replies.delete`

Permanently delete a specific reply from a Drive file comment thread.

- **Service**: `googledrive`
- **Action**: `replies.delete`
- **Action id**: `googledrive.replies.delete`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "replies.delete"
```

## Run

```bash
oo connector run "googledrive" --action "replies.delete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Drive data. Always confirm the target and get explicit user approval before running.
