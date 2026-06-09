# Google Drive · `files.export`

Export a Google Workspace file to the requested MIME type and return a transit URL for the exported content.

- **Service**: `googledrive`
- **Action**: `files.export`
- **Action id**: `googledrive.files.export`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "files.export"
```

## Run

```bash
oo connector run "googledrive" --action "files.export" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
