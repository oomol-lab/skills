# Google Drive · `drives.hide`

Hide a shared drive from the default Drive view.

- **Service**: `googledrive`
- **Action**: `drives.hide`
- **Action id**: `googledrive.drives.hide`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "drives.hide"
```

## Run

```bash
oo connector run "googledrive" --action "drives.hide" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
