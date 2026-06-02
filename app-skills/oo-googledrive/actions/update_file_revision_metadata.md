# Google Drive · `update_file_revision_metadata`

Update revision metadata flags such as publish or keep-forever on a specific Drive file revision.

- **Service**: `googledrive`
- **Action**: `update_file_revision_metadata`
- **Action id**: `googledrive.update_file_revision_metadata`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "update_file_revision_metadata"
```

## Run

```bash
oo connector run "googledrive" --action "update_file_revision_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
