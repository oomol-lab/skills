# Google Drive · `hide_drive`

Hide a shared drive from the default Drive view.

- **Service**: `googledrive`
- **Action**: `hide_drive`
- **Action id**: `googledrive.hide_drive`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "hide_drive"
```

## Run

```bash
oo connector run "googledrive" --action "hide_drive" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
