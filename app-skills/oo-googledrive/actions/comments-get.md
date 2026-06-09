# Google Drive · `comments.get`

Get a specific comment on a Drive file by comment ID.

- **Service**: `googledrive`
- **Action**: `comments.get`
- **Action id**: `googledrive.comments.get`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "comments.get"
```

## Run

```bash
oo connector run "googledrive" --action "comments.get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
