# Google Drive · `get_drive`

Get a shared drive by drive ID.

- **Service**: `googledrive`
- **Action**: `get_drive`
- **Action id**: `googledrive.get_drive`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "get_drive"
```

## Run

```bash
oo connector run "googledrive" --action "get_drive" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
