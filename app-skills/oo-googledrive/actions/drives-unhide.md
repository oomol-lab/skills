# Google Drive · `drives.unhide`

Unhide a shared drive and restore it to the default Drive view.

- **Service**: `googledrive`
- **Action**: `drives.unhide`
- **Action id**: `googledrive.drives.unhide`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "drives.unhide"
```

## Run

```bash
oo connector run "googledrive" --action "drives.unhide" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
