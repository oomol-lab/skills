# Google Drive · `create_file`

Create a Google Drive file with metadata only. Use a Google Workspace mime type to create an empty native file shell.

- **Service**: `googledrive`
- **Action**: `create_file`
- **Action id**: `googledrive.create_file`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "create_file"
```

## Run

```bash
oo connector run "googledrive" --action "create_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
