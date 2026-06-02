# Google Drive · `list_permissions`

List permissions on a Drive file or shared drive.

- **Service**: `googledrive`
- **Action**: `list_permissions`
- **Action id**: `googledrive.list_permissions`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "list_permissions"
```

## Run

```bash
oo connector run "googledrive" --action "list_permissions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
