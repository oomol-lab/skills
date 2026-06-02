# Google Drive · `update_drive`

Update metadata or restrictions on a shared drive.

- **Service**: `googledrive`
- **Action**: `update_drive`
- **Action id**: `googledrive.update_drive`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "update_drive"
```

## Run

```bash
oo connector run "googledrive" --action "update_drive" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
