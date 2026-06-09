# Google Drive · `replies.get`

Get a specific reply under a Drive file comment.

- **Service**: `googledrive`
- **Action**: `replies.get`
- **Action id**: `googledrive.replies.get`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "replies.get"
```

## Run

```bash
oo connector run "googledrive" --action "replies.get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
