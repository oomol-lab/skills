# Google Drive · `drives.list`

List shared drives accessible to the connected account.

- **Service**: `googledrive`
- **Action**: `drives.list`
- **Action id**: `googledrive.drives.list`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "drives.list"
```

## Run

```bash
oo connector run "googledrive" --action "drives.list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
