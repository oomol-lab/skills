# Google Drive · `unhide_drive`

Unhide a shared drive and restore it to the default Drive view.

- **Service**: `googledrive`
- **Action**: `unhide_drive`
- **Action id**: `googledrive.unhide_drive`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "unhide_drive"
```

## Run

```bash
oo connector run "googledrive" --action "unhide_drive" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
