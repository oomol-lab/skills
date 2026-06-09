# Google Drive · `files.list`

List Google Drive files using the official Drive query and pagination parameters.

- **Service**: `googledrive`
- **Action**: `files.list`
- **Action id**: `googledrive.files.list`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "files.list"
```

## Run

```bash
oo connector run "googledrive" --action "files.list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
