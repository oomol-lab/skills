# Google Drive · `list_replies`

List replies under a Drive file comment with pagination.

- **Service**: `googledrive`
- **Action**: `list_replies`
- **Action id**: `googledrive.list_replies`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "list_replies"
```

## Run

```bash
oo connector run "googledrive" --action "list_replies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
