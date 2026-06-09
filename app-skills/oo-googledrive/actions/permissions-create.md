# Google Drive · `permissions.create`

Create a permission on a Drive file or shared drive.

- **Service**: `googledrive`
- **Action**: `permissions.create`
- **Action id**: `googledrive.permissions.create`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "permissions.create"
```

## Run

```bash
oo connector run "googledrive" --action "permissions.create" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
