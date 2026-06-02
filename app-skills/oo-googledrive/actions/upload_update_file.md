# Google Drive · `upload_update_file`

Replace the content of an existing Drive file and optionally update metadata.

- **Service**: `googledrive`
- **Action**: `upload_update_file`
- **Action id**: `googledrive.upload_update_file`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "upload_update_file"
```

## Run

```bash
oo connector run "googledrive" --action "upload_update_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
