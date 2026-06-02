# Google Drive · `list_shared_drives`

List shared drives accessible to the connected account.

- **Service**: `googledrive`
- **Action**: `list_shared_drives`
- **Action id**: `googledrive.list_shared_drives`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "list_shared_drives"
```

## Run

```bash
oo connector run "googledrive" --action "list_shared_drives" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
