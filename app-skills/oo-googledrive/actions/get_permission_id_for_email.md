# Google Drive · `get_permission_id_for_email`

Look up the Drive permission ID for an email address.

- **Service**: `googledrive`
- **Action**: `get_permission_id_for_email`
- **Action id**: `googledrive.get_permission_id_for_email`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "get_permission_id_for_email"
```

## Run

```bash
oo connector run "googledrive" --action "get_permission_id_for_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
