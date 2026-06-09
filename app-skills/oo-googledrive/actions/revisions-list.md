# Google Drive · `revisions.list`

List revision metadata for a Drive file.

- **Service**: `googledrive`
- **Action**: `revisions.list`
- **Action id**: `googledrive.revisions.list`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "revisions.list"
```

## Run

```bash
oo connector run "googledrive" --action "revisions.list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
