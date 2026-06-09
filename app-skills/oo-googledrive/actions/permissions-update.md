# Google Drive · `permissions.update`

Update an existing Drive permission using Google Drive v3 patch semantics.

- **Service**: `googledrive`
- **Action**: `permissions.update`
- **Action id**: `googledrive.permissions.update`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "permissions.update"
```

## Run

```bash
oo connector run "googledrive" --action "permissions.update" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
