# Google Drive · `files.emptyTrash`

Permanently empty the user's trash or a shared drive's trash.

- **Service**: `googledrive`
- **Action**: `files.emptyTrash`
- **Action id**: `googledrive.files.emptyTrash`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "files.emptyTrash"
```

## Run

```bash
oo connector run "googledrive" --action "files.emptyTrash" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
