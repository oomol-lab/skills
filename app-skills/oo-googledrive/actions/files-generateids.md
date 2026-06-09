# Google Drive · `files.generateIds`

Generate one or more Drive file IDs for later create or copy requests.

- **Service**: `googledrive`
- **Action**: `files.generateIds`
- **Action id**: `googledrive.files.generateIds`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "files.generateIds"
```

## Run

```bash
oo connector run "googledrive" --action "files.generateIds" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
