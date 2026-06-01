# Google Drive · `download_file_operation`

Compatibility alias of `download_file`.

- **Service**: `googledrive`
- **Action**: `download_file_operation`
- **Action id**: `googledrive.download_file_operation`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "download_file_operation"
```

## Run

```bash
oo connector run "googledrive" --action "download_file_operation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
