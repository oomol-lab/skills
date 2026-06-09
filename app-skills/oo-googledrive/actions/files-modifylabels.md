# Google Drive · `files.modifyLabels`

Add, update, or remove Drive labels on a file.

- **Service**: `googledrive`
- **Action**: `files.modifyLabels`
- **Action id**: `googledrive.files.modifyLabels`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "files.modifyLabels"
```

## Run

```bash
oo connector run "googledrive" --action "files.modifyLabels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
