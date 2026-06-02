# Google Drive · `list_revisions`

List revision metadata for a Drive file.

- **Service**: `googledrive`
- **Action**: `list_revisions`
- **Action id**: `googledrive.list_revisions`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "list_revisions"
```

## Run

```bash
oo connector run "googledrive" --action "list_revisions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
