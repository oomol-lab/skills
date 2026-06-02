# Google Drive · `patch_permission`

Patch specific fields on an existing Drive permission.

- **Service**: `googledrive`
- **Action**: `patch_permission`
- **Action id**: `googledrive.patch_permission`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "patch_permission"
```

## Run

```bash
oo connector run "googledrive" --action "patch_permission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
