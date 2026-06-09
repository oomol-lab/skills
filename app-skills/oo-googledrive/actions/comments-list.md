# Google Drive · `comments.list`

List comments on a Drive file with pagination.

- **Service**: `googledrive`
- **Action**: `comments.list`
- **Action id**: `googledrive.comments.list`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "comments.list"
```

## Run

```bash
oo connector run "googledrive" --action "comments.list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
