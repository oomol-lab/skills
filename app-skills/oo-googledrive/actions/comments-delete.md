# Google Drive · `comments.delete`

Permanently delete a comment thread from a Drive file.

- **Service**: `googledrive`
- **Action**: `comments.delete`
- **Action id**: `googledrive.comments.delete`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "comments.delete"
```

## Run

```bash
oo connector run "googledrive" --action "comments.delete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Drive data. Always confirm the target and get explicit user approval before running.
