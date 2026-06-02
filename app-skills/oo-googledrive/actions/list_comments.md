# Google Drive · `list_comments`

List comments on a Drive file with pagination.

- **Service**: `googledrive`
- **Action**: `list_comments`
- **Action id**: `googledrive.list_comments`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "list_comments"
```

## Run

```bash
oo connector run "googledrive" --action "list_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
