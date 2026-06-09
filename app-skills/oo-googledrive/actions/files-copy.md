# Google Drive · `files.copy`

Copy a Drive file and optionally override official File metadata.

- **Service**: `googledrive`
- **Action**: `files.copy`
- **Action id**: `googledrive.files.copy`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "files.copy"
```

## Run

```bash
oo connector run "googledrive" --action "files.copy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
