# Google Drive · `files.get`

Get metadata for a Drive file by ID.

- **Service**: `googledrive`
- **Action**: `files.get`
- **Action id**: `googledrive.files.get`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "files.get"
```

## Run

```bash
oo connector run "googledrive" --action "files.get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
