# Google Drive · `download_file`

Download a Drive file by ID, or export a Google Workspace file when `mimeType` is provided. Returns a transit URL for the downloaded content.

- **Service**: `googledrive`
- **Action**: `download_file`
- **Action id**: `googledrive.download_file`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "download_file"
```

## Run

```bash
oo connector run "googledrive" --action "download_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
