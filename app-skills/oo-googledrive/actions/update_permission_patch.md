# Google Drive · `update_permission_patch`

Patch an existing Drive permission using structured permission fields.

- **Service**: `googledrive`
- **Action**: `update_permission_patch`
- **Action id**: `googledrive.update_permission_patch`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "update_permission_patch"
```

## Run

```bash
oo connector run "googledrive" --action "update_permission_patch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
