# Google Drive · `find_file`

Search Google Drive files and folders with query, date, starred, trash, and shared-drive filters.

- **Service**: `googledrive`
- **Action**: `find_file`
- **Action id**: `googledrive.find_file`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "find_file"
```

## Run

```bash
oo connector run "googledrive" --action "find_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
