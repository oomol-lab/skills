# Google Drive · `get_file_metadata`

Get metadata for a Drive file by ID, including mime type, parents, ownership, and trash state.

- **Service**: `googledrive`
- **Action**: `get_file_metadata`
- **Action id**: `googledrive.get_file_metadata`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "get_file_metadata"
```

## Run

```bash
oo connector run "googledrive" --action "get_file_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
