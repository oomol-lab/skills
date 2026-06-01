# Google Drive · `create_folder`

Create a Google Drive folder, optionally under one or more parent folders.

- **Service**: `googledrive`
- **Action**: `create_folder`
- **Action id**: `googledrive.create_folder`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "create_folder"
```

## Run

```bash
oo connector run "googledrive" --action "create_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
