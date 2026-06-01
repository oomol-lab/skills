# Google Drive · `list_access_proposals`

List pending access proposals for a specific Drive file.

- **Service**: `googledrive`
- **Action**: `list_access_proposals`
- **Action id**: `googledrive.list_access_proposals`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "list_access_proposals"
```

## Run

```bash
oo connector run "googledrive" --action "list_access_proposals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
