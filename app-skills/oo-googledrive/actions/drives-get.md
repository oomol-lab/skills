# Google Drive · `drives.get`

Get a shared drive by drive ID.

- **Service**: `googledrive`
- **Action**: `drives.get`
- **Action id**: `googledrive.drives.get`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "drives.get"
```

## Run

```bash
oo connector run "googledrive" --action "drives.get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
