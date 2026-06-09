# Google Drive · `permissions.get`

Get a specific permission on a Drive file or shared drive by permission ID.

- **Service**: `googledrive`
- **Action**: `permissions.get`
- **Action id**: `googledrive.permissions.get`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "permissions.get"
```

## Run

```bash
oo connector run "googledrive" --action "permissions.get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
