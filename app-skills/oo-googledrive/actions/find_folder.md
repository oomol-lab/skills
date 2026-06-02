# Google Drive · `find_folder`

Search Google Drive folders only, with the same query and pagination controls as `find_file`.

- **Service**: `googledrive`
- **Action**: `find_folder`
- **Action id**: `googledrive.find_folder`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "find_folder"
```

## Run

```bash
oo connector run "googledrive" --action "find_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
