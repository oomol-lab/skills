# Google Drive · `update_permission`

Compatibility alias of `update_permission_patch`; Google Drive v3 uses PATCH semantics.

- **Service**: `googledrive`
- **Action**: `update_permission`
- **Action id**: `googledrive.update_permission`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "update_permission"
```

## Run

```bash
oo connector run "googledrive" --action "update_permission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
