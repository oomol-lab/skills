# Google Drive · `update_file_metadata_patch`

Update Drive file metadata fields with patch semantics.

- **Service**: `googledrive`
- **Action**: `update_file_metadata_patch`
- **Action id**: `googledrive.update_file_metadata_patch`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "update_file_metadata_patch"
```

## Run

```bash
oo connector run "googledrive" --action "update_file_metadata_patch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
