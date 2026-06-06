# Google Drive · `permissions.list`

List permissions on a Drive file or shared drive.

- **Service**: `googledrive`
- **Action**: `permissions.list`
- **Action id**: `googledrive.permissions.list`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "permissions.list"
```

## Run

```bash
oo connector run "googledrive" --action "permissions.list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
