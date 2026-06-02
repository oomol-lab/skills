# Google Drive · `edit_file`

Overwrite an existing Drive file with text content and optional metadata changes.

- **Service**: `googledrive`
- **Action**: `edit_file`
- **Action id**: `googledrive.edit_file`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "edit_file"
```

## Run

```bash
oo connector run "googledrive" --action "edit_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
