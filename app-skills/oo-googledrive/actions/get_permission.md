# Google Drive · `get_permission`

Get a specific permission on a Drive file or shared drive by permission ID.

- **Service**: `googledrive`
- **Action**: `get_permission`
- **Action id**: `googledrive.get_permission`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "get_permission"
```

## Run

```bash
oo connector run "googledrive" --action "get_permission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
