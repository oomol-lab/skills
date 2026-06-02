# Google Drive · `download_file2`

Compatibility alias of `download_file`.

- **Service**: `googledrive`
- **Action**: `download_file2`
- **Action id**: `googledrive.download_file2`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "download_file2"
```

## Run

```bash
oo connector run "googledrive" --action "download_file2" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
