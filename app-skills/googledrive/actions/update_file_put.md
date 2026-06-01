# Google Drive · `update_file_put`

Update a Drive file with metadata and optional uploaded content.

- **Service**: `googledrive`
- **Action**: `update_file_put`
- **Action id**: `googledrive.update_file_put`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "update_file_put"
```

## Run

```bash
oo connector run "googledrive" --action "update_file_put" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
