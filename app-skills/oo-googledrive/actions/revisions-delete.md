# Google Drive · `revisions.delete`

Permanently delete a specific revision from a Drive file.

- **Service**: `googledrive`
- **Action**: `revisions.delete`
- **Action id**: `googledrive.revisions.delete`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "revisions.delete"
```

## Run

```bash
oo connector run "googledrive" --action "revisions.delete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Drive data. Always confirm the target and get explicit user approval before running.
