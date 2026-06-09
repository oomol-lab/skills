# Google Drive · `approvals.list`

List approvals associated with a specific Drive file.

- **Service**: `googledrive`
- **Action**: `approvals.list`
- **Action id**: `googledrive.approvals.list`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "approvals.list"
```

## Run

```bash
oo connector run "googledrive" --action "approvals.list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
