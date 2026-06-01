# Google Drive · `list_approvals`

List approvals associated with a specific Drive file.

- **Service**: `googledrive`
- **Action**: `list_approvals`
- **Action id**: `googledrive.list_approvals`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "list_approvals"
```

## Run

```bash
oo connector run "googledrive" --action "list_approvals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
