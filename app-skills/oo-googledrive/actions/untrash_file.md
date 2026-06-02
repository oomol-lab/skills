# Google Drive · `untrash_file`

Restore a Drive file or folder from trash.

- **Service**: `googledrive`
- **Action**: `untrash_file`
- **Action id**: `googledrive.untrash_file`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "untrash_file"
```

## Run

```bash
oo connector run "googledrive" --action "untrash_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
