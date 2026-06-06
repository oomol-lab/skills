# Google Drive · `replies.list`

List replies under a Drive file comment with pagination.

- **Service**: `googledrive`
- **Action**: `replies.list`
- **Action id**: `googledrive.replies.list`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "replies.list"
```

## Run

```bash
oo connector run "googledrive" --action "replies.list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
