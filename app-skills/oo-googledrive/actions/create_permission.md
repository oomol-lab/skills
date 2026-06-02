# Google Drive · `create_permission`

Create a permission on a Drive file or shared drive to share it with users, groups, domains, or anyone.

- **Service**: `googledrive`
- **Action**: `create_permission`
- **Action id**: `googledrive.create_permission`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "create_permission"
```

## Run

```bash
oo connector run "googledrive" --action "create_permission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
