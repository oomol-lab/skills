# Google Drive · `export_google_workspace_file`

Export a Google Workspace file to the requested MIME type and return a transit URL for the exported content.

- **Service**: `googledrive`
- **Action**: `export_google_workspace_file`
- **Action id**: `googledrive.export_google_workspace_file`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "export_google_workspace_file"
```

## Run

```bash
oo connector run "googledrive" --action "export_google_workspace_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
